import { toast } from 'react-toastify';

const getStoredDetails = () => {

    const storedDetailsSTR = localStorage.getItem("appointmentList");

    if(storedDetailsSTR) {
        const storedDetailsData = JSON.parse(storedDetailsSTR);
        return storedDetailsData;
    } else {
        return [];
    }

}

const addToStoredDB = (id, name) => {

    const storedDetailsData = getStoredDetails();

    if(storedDetailsData.includes(id)){
        toast.warning(`${name} Appointment Already Scheduled For Today!`);
    } else {
        toast.success(`Appointment Scheduled For ${name} successfully!`);
        storedDetailsData.push(id);
        console.log(storedDetailsData);
        
        const data = JSON.stringify(storedDetailsData);
        localStorage.setItem('appointmentList', data);
    }

}

export {addToStoredDB, getStoredDetails};