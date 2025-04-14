document.addEventListener('DOMContentLoaded', function() {
    let popup = document.getElementById('popup');
    let overlay = document.getElementById('overlay');
    let closeBtn = document.getElementById('closeBtn');

    // Show the popup and overlay
    popup.style.display = 'block';
    overlay.style.display = 'block';

    // Close the popup when the close button is clicked
    closeBtn.addEventListener('click', function() {
        popup.style.display = 'none';
        overlay.style.display = 'none';
    });

    // Close the popup when the overlay is clicked
    overlay.addEventListener('click', function() {
        popup.style.display = 'none';
        overlay.style.display = 'none';
    });
});


 // Toggle dropdowns
    document.getElementById('search-toggle').addEventListener('click', function() {
        document.getElementById('search-dropdown').classList.toggle('active');
    });
    
    document.getElementById('account-toggle').addEventListener('click', function() {
        document.getElementById('account-dropdown').classList.toggle('active');
    });
    
    document.getElementById('cart-toggle').addEventListener('click', function() {
        document.getElementById('cart-dropdown').classList.toggle('active');
    });