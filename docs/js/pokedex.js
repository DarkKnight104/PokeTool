fetch('data/pokemon.json')
  .then(response => response.json())
  .then(data => {
    const button = document.getElementById("button");

    function mkgen(min, max, x) {
      let id = `gen${x}`;
      let target = document.getElementById(id);
      target.innerHTML = `<tr>
                          <td colspan="3" id="genlb">Gen ${x}</td>
                          </tr>`;

      for (let i = min - 1; i <= max - 1; i += 3) {
        let first = data[i]?.Name || "";
        let second = data[i + 1]?.Name || "";
        let third = data[i + 2]?.Name || "";

        target.innerHTML += `<tr>
                              <td class="pkm">${first}</td>
                              ${second ? `<td class="pkm">${second}</td>` : ""}
                              ${third ? `<td class="pkm">${third}</td>` : ""}
                            </tr>`;
      }
    }

    function clearTable() {
      for (let i = 1; i <= 9; i++) {
        let id = `gen${i}`;
        let target = document.getElementById(id);
        target.innerHTML = ``;
      }
      document.getElementById("genun").innerHTML = ``;
      document.getElementById("genhisui").innerHTML = ``;
    }

    button.onclick = function () {
      clearTable();
      let gen = document.getElementById("Gen").selectedIndex;
      switch (gen) {
        case 1: mkgen(1, 151, 1); break;
        case 2: mkgen(152, 251, 2); break;
        case 3: mkgen(252, 386, 3); break;
        case 4: mkgen(387, 493, 4); break;
        case 5: mkgen(494, 649, 5); break;
        case 6: mkgen(650, 721, 6); break;
        case 7: mkgen(722, 807, 7); break;
        case 8: mkgen(808, 809, "un"); break;
        case 9: mkgen(810, 898, 8); break;
        case 10: mkgen(899, 905, "hisui"); break;
        case 11: mkgen(906, 1025, 9); break;
        case 0:
          mkgen(1, 151, 1);
          mkgen(152, 251, 2);
          mkgen(252, 386, 3);
          mkgen(387, 493, 4);
          mkgen(494, 649, 5);
          mkgen(650, 721, 6);
          mkgen(722, 807, 7);
          mkgen(808, 809, "un");
          mkgen(810, 898, 8);
          mkgen(899, 905, "hisui");
          mkgen(906, 1025, 9);
          break;
      }
    };
  })