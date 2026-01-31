// Theme toggle for Catppuccin themes
(function() {
  'use strict';

  // const themeOrder = ['latte', 'frappe', 'macchiato', 'mocha'];
  const themeOrder = ['latte', 'frappe'];
  const defaultTheme = 'latte';
  const cssLink = document.querySelector('link[href*="main.css"]');
  if (!cssLink) return;

  // Extract current theme from href
  function getCurrentTheme() {
    const href = cssLink.getAttribute('href');
    const match = href.match(/theme-(\w+)\.css/);
    if (match) return match[1];
    // default main.css is latte
    return 'latte';
  }

  // Set theme by changing href
  function setTheme(theme) {
    const base = cssLink.href.replace(/[^\/]+\.css$/, '');
    const newHref = theme === 'latte' ? base + 'main.css' : base + `theme-${theme}.css`;
    cssLink.setAttribute('href', newHref);
    localStorage.setItem('catppuccin-theme', theme);
    updateButtonIcon(theme);
  }

  // Cycle to next theme
  function nextTheme() {
    const current = getCurrentTheme();
    const idx = themeOrder.indexOf(current);
    const nextIdx = (idx + 1) % themeOrder.length;
    setTheme(themeOrder[nextIdx]);
  }

  // Update button icon based on theme (optional)
  function updateButtonIcon(theme) {
    const button = document.getElementById('theme-toggle');
    if (!button) return;
    const icon = button.querySelector('i');
    if (!icon) return;
    // Change icon based on theme (sun for light, moon for dark)
    if (theme === 'latte') {
      icon.className = 'fas fa-sun theme-icon';
    } else {
      icon.className = 'fas fa-moon theme-icon';
    }
  }

  // Initialize theme from localStorage
  const savedTheme = localStorage.getItem('catppuccin-theme');
  if (savedTheme && themeOrder.includes(savedTheme)) {
    setTheme(savedTheme);
  } else {
    // Ensure default theme is set
    setTheme(defaultTheme);
  }

  // Attach event listener to toggle button
  const toggleButton = document.getElementById('theme-toggle');
  if (toggleButton) {
    toggleButton.addEventListener('click', nextTheme);
  }

})();