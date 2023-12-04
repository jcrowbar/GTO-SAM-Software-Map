document.querySelectorAll('.software').forEach(item => {
    item.addEventListener('dragstart', dragStart);
});

function dragStart(e) {
    e.dataTransfer.setData('text/plain', e.target.id);
}

const hardwareArea = document.getElementById('hardwareArea');
hardwareArea.addEventListener('dragover', dragOver);
hardwareArea.addEventListener('drop', drop);

function dragOver(e) {
    e.preventDefault();
}

function drop(e) {
    e.preventDefault();
    const softwareId = e.dataTransfer.getData('text/plain');
    const software = document.getElementById(softwareId);
    hardwareArea.appendChild(software);
    updateLicenseSummary(software.textContent);
}

function updateLicenseSummary(softwareName) {
    const summaryTable = document.getElementById('summaryTable');
    let row = summaryTable.querySelector(`tr[data-software="${softwareName}"]`);
    if (!row) {
        row = summaryTable.insertRow();
        row.setAttribute('data-software', softwareName);
        row.insertCell().textContent = softwareName;
        row.insertCell().textContent = '1';
    } else {
        row.cells[1].textContent = parseInt(row.cells[1].textContent) + 1;
    }
}

function calculateLicenses() {
    alert('Calculating licenses based on the selected software...');
}

function exportToCSV() {
    let csvContent = "data:text/csv;charset=utf-8,System Specification,Software Name,Quantity\n";
    const systemSpec = "Example System Spec"; // Replace with actual system specification data
    const rows = document.querySelectorAll("#summaryTable tr");

    rows.forEach((row, index) => {
        if (index === 0) return; // Skip the header row