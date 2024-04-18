const otpForm = document.getElementById('otpForm');

otpForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  const emailOrPhone = document.getElementById('emailOrPhone').value;
  const otp = document.getElementById('otp').value;

  try {
    const response = await fetch('/api/verify-otp', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ emailOrPhone, otp })
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();

    if (data.success) {
      alert('OTP verified successfully');
      // Redirect to the next page or perform any other action
    } else {
      alert('Invalid OTP');
    }
  } catch (error) {
    console.error(error);
    alert('An error occurred while verifying the OTP');
  }
});