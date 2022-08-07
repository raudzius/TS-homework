/* eslint no-lone-blocks: 0 */

// Alikite užduotis, ir atspausdinkite savo sprendimo pavyzdžius užduoties blokuose
console.group('Assertions - užduotys');
{
  // ↓↓↓↓ Tipus ir užduotims bendrus kintamuosius apraškite čia ↓↓↓↓
  const button: HTMLButtonElement = document.querySelector('#assertions button') as HTMLButtonElement;
  const squareContainerDiv: HTMLDivElement = document.querySelector('#assertions div') as HTMLDivElement;
  const squareCounterParagraph: HTMLParagraphElement = document.querySelector('#assertions p') as HTMLParagraphElement;
  // ↑↑↑↑ Tipus ir užduotims bendrus kintamuosius apraškite čia ↑↑↑↑

  console.group('1. Sukurkite HTML mygtuką ir uždėkite jam įvykio klausiklį, jog paspaudus, būt spausdinamas tekstas "paspausta!"');
  {
    button.addEventListener('click', () => {
      console.log('paspausta!');
    });
  }
  console.groupEnd();

  console.group('2. Sukurkite <div> elementą ir papildikyte jo turinį mažu kvadaratėliu kiekvieną kart, kuomet paspaudžiamas [1.] mygtukas');
  {
    button.addEventListener('click', ():void => {
      const squareDiv: HTMLDivElement = document.createElement('div');
      squareDiv.style.cssText = `
      display: inline-block;
      width: 1rem;
      height: 1rem;
      border: 1px solid black;
      `;
      squareContainerDiv.append(squareDiv);
    });
  }
  console.groupEnd();

  console.group('3. Sukurkite <p> elementą kuriame spausdinsite skaičių - kiek kvadratėlių yra [2.] konteineryje');
  {
    button.addEventListener('click', ():void => {
      squareCounterParagraph.textContent = squareContainerDiv.children.length.toString();
    });
  }
  console.groupEnd();
}
console.groupEnd();
