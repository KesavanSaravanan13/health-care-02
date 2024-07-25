import Swal from "sweetalert2";


export const Cancel = () => {
    return (
        Swal.fire({
            toast: true,
            position: "top-end",
            icon: "info",
            title: "Cancelled",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer);
                toast.addEventListener('mouseleave', Swal.resumeTimer);
            }
        }));
}

export const Success = () => {
    return (
        Swal.fire({
            toast: true,
            position: "top-end",
            icon: "success",
            title: "Data Added Successfully",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer);
                toast.addEventListener('mouseleave', Swal.resumeTimer);
            }
        })
    );
}

export const Error = () => {
    return(
        Swal.fire({
            toast: true,
            position: "top-end",
            icon: "error",
            title: "Failed To Add!!!",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer);
                toast.addEventListener('mouseleave', Swal.resumeTimer);
            }
        })
    );
}

export const InvalidUser = () => {
    return(
        Swal.fire({
            toast: true,
            position: "top-end",
            icon: "info",
            title: "Invalid User",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer);
                toast.addEventListener('mouseleave', Swal.resumeTimer);
            }
        })
    );
}
export const validUser = () => {
    return(
        Swal.fire({
            toast: true,
            position: "top-end",
            icon: "success",
            title: "Logged in...",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer);
                toast.addEventListener('mouseleave', Swal.resumeTimer);
            }
        })
    );
}

export const Updated = () => {
    return(
        Swal.fire({
            toast: true,
            position: "top-end",
            icon: "success",
            title: "Updated",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer);
                toast.addEventListener('mouseleave', Swal.resumeTimer);
            }
        })
    );
}