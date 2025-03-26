/* script.js */
// Attach event listeners to all "Read More" buttons
document.querySelectorAll('.read-more').forEach(button => {
    button.addEventListener('click', function() {
      const currentPost = this.parentElement;
      const isExpanded = currentPost.classList.contains('expanded');
  
      // Collapse any post that is currently expanded (other than the one clicked)
      document.querySelectorAll('.post').forEach(post => {
        if (post !== currentPost) {
          post.classList.remove('expanded');
          const btn = post.querySelector('.read-more');
          if (btn) btn.textContent = "Read More";
        }
      });
  
      // Toggle the current post's expansion
      if (isExpanded) {
        currentPost.classList.remove('expanded');
        this.textContent = "Read More";
      } else {
        currentPost.classList.add('expanded');
        this.textContent = "Collapse";
      }
    });
  });
  