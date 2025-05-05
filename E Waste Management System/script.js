// Login Form Handling
document.getElementById('login-form')?.addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Login successful! Redirecting to dashboard...');
    window.location.href = 'dashboard.html';
  });
  
  // Registration Form Handling
  document.getElementById('register-form')?.addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Registration successful! Redirecting to login...');
    window.location.href = 'login.html';
  });
  