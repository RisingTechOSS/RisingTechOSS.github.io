async function loadMarkdown(markdownUrl, containerId) {
  const container = document.getElementById(containerId);
  if (!container) {
      console.error(`Container with ID "${containerId}" not found.`);
      return;
  }
  try {
      container.textContent = "";
      const response = await fetch(markdownUrl);
      if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const markdown = await response.text();
      const htmlContent = marked.parse(markdown);
      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = htmlContent;
      const links = tempDiv.querySelectorAll('a');
      links.forEach(link => {
          link.setAttribute('target', '_blank');
      });
      container.innerHTML = tempDiv.innerHTML;
  } catch (error) {
      console.error("Error loading Markdown file:", error);
      container.textContent = "Failed to load content.";
  }
}