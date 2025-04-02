const galavecer = dayjs ('2025-06-19');
const dnes = dayjs ();
const dnyZbyva = galavecer.diff(dnes, 'day'); // Spočítá rozdíl v dnech

if (dnes.isAfter(galavecer)) {
    document.body.innerHTML += `<h2>ANO!</h2> <p>Studentky již odprezentovaly své projekty.</p>`;
} else if (dnes.isSame(galavecer)) {
    document.body.innerHTML += `<p>SPrávě dnes probíhá galavečer.</p>`
} else {
    document.body.innerHTML += `<h2>NE!</h2> <p>Studentky jsou ještě v procesu učení.</p>`;
        document.body.innerHTML += `<p>Zbývá ${dnyZbyva} dní do galavečera.</p>`; // Přidání odpočtu

}