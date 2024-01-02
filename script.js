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
}

function calculateLicenses() {
    // Placeholder for license calculation logic
    alert('Calculating licenses based on the selected software...');
}
