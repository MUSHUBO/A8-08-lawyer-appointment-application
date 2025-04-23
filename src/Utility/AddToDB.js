const getStoredDetails = () => {

    const storedDetailsSTR = localStorage.getItem("appointmentList");

    if(storedDetailsSTR) {
        const storedDetailsData = JSON.parse(storedDetailsSTR);
        return storedDetailsData;
    } else {
        return [];
    }

}

const addToStoredDB = (id) => {

    const storedDetailsData = getStoredDetails();

    if(storedDetailsData.includes(id)){
        alert("lawyer already appointments");
    } else {
        alert('add successfully');
        storedDetailsData.push(id);
        console.log(storedDetailsData);
        
        const data = JSON.stringify(storedDetailsData);
        localStorage.setItem('appointmentList', data);
    }

}

export {addToStoredDB, getStoredDetails};