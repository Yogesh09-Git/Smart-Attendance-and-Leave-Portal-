function login() {
    const role = document.getElementById("role").value;

    if (role === "student") {
        window.location.href =
        "https://smart-attendance-cloudformation-mansi.s3.ap-south-1.amazonaws.com/SmartAttendancePortal/student.html";
    }
    else if (role === "faculty") {
        window.location.href =
        "https://smart-attendance-cloudformation-mansi.s3.ap-south-1.amazonaws.com/SmartAttendancePortal/faculty.html";
    }
    else if (role === "admin") {
        window.location.href =
        "https://smart-attendance-cloudformation-mansi.s3.ap-south-1.amazonaws.com/SmartAttendancePortal/admin.html";
    }
    else {
        alert("Please select a role");
    }
}