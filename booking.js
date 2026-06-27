        function submitForm() {

            var isValid = true;

            // Hide all existing error messages first
            var allErrors = document.querySelectorAll('.text-danger.small');
            for (var i = 0; i < allErrors.length; i++) {
                allErrors[i].classList.add('d-none');
            }

            // Check: Full Name (at least 2 characters)
            var name = document.getElementById('fullName').value.trim();
            if (name.length < 2) {
                document.getElementById('nameError').classList.remove('d-none');
                isValid = false;
            }

            // Check: Email format
            var email = document.getElementById('email').value.trim();
            var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(email)) {
                document.getElementById('emailError').classList.remove('d-none');
                isValid = false;
            }

            // Check: Phone has at least 7 digits
            var phone = document.getElementById('phone').value.trim();
            var digitsOnly = phone.replace(/[^0-9]/g, '');
            if (digitsOnly.length < 7) {
                document.getElementById('phoneError').classList.remove('d-none');
                isValid = false;
            }

            // Check: A tour is selected
            var tour = document.getElementById('tourSelect').value;
            if (tour === '') {
                document.getElementById('tourError').classList.remove('d-none');
                isValid = false;
            }

            // Check: Date is today or in the future
            var dateValue = document.getElementById('tourDate').value;
            if (dateValue === '') {
                document.getElementById('dateError').classList.remove('d-none');
                isValid = false;
            } else {
                var today = new Date();
                today.setHours(0, 0, 0, 0);
                var selectedDate = new Date(dateValue);
                if (selectedDate < today) {
                    document.getElementById('dateError').classList.remove('d-none');
                    isValid = false;
                }
            }

            // If all fields are valid, show success and clear the form
            if (isValid) {
                document.getElementById('successMessage').classList.remove('d-none');

                document.getElementById('fullName').value = '';
                document.getElementById('email').value = '';
                document.getElementById('phone').value = '';
                document.getElementById('tourSelect').value = '';
                document.getElementById('tourDate').value = '';
                document.getElementById('groupSize').value = '';
                document.getElementById('notes').value = '';

                // Scroll to the top so the user sees the success message
                window.scrollTo(0, 0);
            }
        }
