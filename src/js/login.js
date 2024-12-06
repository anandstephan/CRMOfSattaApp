let submit = document.getElementById("submit");

function decreasing(n) {
  if (n == 0) return;
  console.log(n);
  decreasing(n - 1);
  console.log(n);
}

decreasing(5);

submit.addEventListener("click", async () => {
  let phone = document.getElementById("phone").value;
  let otp = document.getElementById("otp").value;
  const data = {
    phoneNumber: phone,
    OTP: otp,
  };
  console.log(data);

  try {
    //
    const response = await fetch("http://localhost:6001/api/v1/admin/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      const result = await response.json();
      console.log(result);
      if (result.statusCode === 200) {
        // window.location.href = "/src/dashboard.html";
      }

      // Handle successful login, e.g., redirect to dashboard
    } else {
      console.error("Login failed:", response.statusText);
      // Handle login failure, e.g., display error message
    }
  } catch (error) {
    console.error("Error:", error);
    // Handle network errors or other exceptions
  }
});
