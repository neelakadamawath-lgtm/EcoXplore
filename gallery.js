// Open the lightbox modal with the clicked image
        function openModal(imageSrc, imageTitle) {
            document.getElementById('modalImage').src = imageSrc;
            document.getElementById('photoModalLabel').textContent = imageTitle;
            var modal = new bootstrap.Modal(document.getElementById('photoModal'));
            modal.show();
        }