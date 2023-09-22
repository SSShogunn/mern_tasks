function showDate1() {
    document.getElementById('dateOutput').innerHTML = new Date();
}

function showDateTime() {
    const d = new Date();
    const da = d.getDate();
    const m = d.getMonth();
    const monthNames = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];

    const mb = monthNames[m];
    const year = d.getFullYear();
    document.getElementById('TimeOutput').innerHTML = da + '/' + mb + '/' + year;
}