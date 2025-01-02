async function loadMarkdownContent(markdownUrl, containerId, tocContainerId = null) {
    const container = document.getElementById(containerId);
    const tocContainer = tocContainerId ? document.getElementById(tocContainerId) : null;
  
    if (!container || (tocContainerId && !tocContainer)) {
      console.error("Required container elements not found.");
      return;
    }
  
    try {
      const response = await fetch(markdownUrl);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const markdown = await response.text();
      const htmlContent = marked.parse(markdown);
  
      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = htmlContent;
  
      if (tocContainer) {
        const headings = tempDiv.querySelectorAll("h2, h3");
        const tocItems = [];
  
        headings.forEach((heading, index) => {
          const id = `heading-${index}`;
          heading.id = id;
          tocItems.push(`<a href="#${id}">${heading.textContent}</a>`);
        });
  
        tocContainer.innerHTML = tocItems.join("");
      }
  
      const links = tempDiv.querySelectorAll("a");
      links.forEach(link => {
        link.setAttribute("target", "_blank");
      });
  
      container.innerHTML = tempDiv.innerHTML;
    } catch (error) {
      console.error("Error loading Markdown file:", error);
      container.textContent = "";
    }
  }
  
  async function loadMarkdown(markdownUrl, containerId) {
    await loadMarkdownContent(markdownUrl, containerId);
  }
  
  async function loadMarkdownWithTOC(markdownUrl, contentId, tocId) {
    await loadMarkdownContent(markdownUrl, contentId, tocId);
  }
  
  function highlightSection(section) {
    const allSections = document.querySelectorAll('h2, h3');
    allSections.forEach(sec => sec.classList.remove('highlighted'));
    section.classList.add('highlighted');
  }
  