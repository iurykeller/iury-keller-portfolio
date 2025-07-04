 const toggle = document.querySelector('.nav-toggle');
      const navLinks = document.querySelector('.nav-links');
      toggle.addEventListener('click', () => {
        const expanded = toggle.getAttribute('aria-expanded') === 'true' || false;
        toggle.setAttribute('aria-expanded', !expanded);
        navLinks.classList.toggle('open');
      });

      // Dark / Light mode
      const themeBtn = document.querySelector('.theme-toggle');
      const userPref = localStorage.getItem('theme');
      if (userPref === 'dark') document.body.classList.add('dark');
      themeBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark');
        const mode = document.body.classList.contains('dark') ? 'dark' : 'light';
        localStorage.setItem('theme', mode);
        themeBtn.textContent = mode === 'dark' ? '☀️' : '🌙';
      });