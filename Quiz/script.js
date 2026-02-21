function auswerten() {
  let punktzahl = 0;
  let fragen = ['q1', 'q2', 'q3']; // Alle Fragen durchgehen

  for (let i = 0; i < fragen.length; i++) {
    let antworten = document.getElementsByName(fragen[i]);
    // gibt Input-Elemente Bukarest, Minsk, Budapest, Kiew zurück
    // fragen[0] = "q1"

    for (let j = 0; j < antworten.length; j++) {
      if (antworten[j].checked) {
        // Wenn Antwort 4 gewählt wurde, wird dann der value von Antwort 4 zur punktzahl addiert
        punktzahl += Number(antworten[j].value); // Number() wandelt String in Zahl um
      }
    }
  }

  document.getElementById('ergebnis').innerHTML =
    'Gesamtpunktzahl: ' + punktzahl + ' von 3';
  // .innerHTML ändert den Inhalt dieses Elements
  // document ist HTML-Dokument
  // nach Id ergebnis suchen
}
