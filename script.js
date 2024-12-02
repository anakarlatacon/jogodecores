const allColors = [
    "AliceBlue", "AntiqueWhite", "Aqua", "Aquamarine", "Azure", "Beige", "Bisque", "Black", "BlanchedAlmond", "Blue",
    "BlueViolet", "Brown", "BurlyWood", "CadetBlue", "Chartreuse", "Chocolate", "Coral", "CornflowerBlue", "Cornsilk",
    "Crimson", "Cyan", "DarkBlue", "DarkCyan", "DarkGoldenRod", "DarkGray", "DarkGreen", "DarkKhaki", "DarkMagenta",
    "DarkOliveGreen", "DarkOrange", "DarkOrchid", "DarkRed", "DarkSalmon", "DarkSeaGreen", "DarkSlateBlue", "DarkSlateGray",
    "DarkTurquoise", "DarkViolet", "DeepPink", "DeepSkyBlue", "DimGray", "DodgerBlue", "FireBrick", "FloralWhite",
    "ForestGreen", "Fuchsia", "Gainsboro", "GhostWhite", "Gold", "GoldenRod", "Gray", "Green", "GreenYellow", "HoneyDew",
    "HotPink", "IndianRed", "Indigo", "Ivory", "Khaki", "Lavender", "LavenderBlush", "LawnGreen", "LemonChiffon",
    "LightBlue", "LightCoral", "LightCyan", "LightGoldenRodYellow", "LightGray", "LightGreen", "LightPink", "LightSalmon",
    "LightSeaGreen", "LightSkyBlue", "LightSlateGray", "LightSteelBlue", "LightYellow", "Lime", "LimeGreen", "Linen",
    "Magenta", "MediumAquaMarine", "MediumBlue", "MediumOrchid", "MediumPurple", "MediumSeaGreen", "MediumSlateBlue",
    "MediumSpringGreen", "MediumTurquoise", "MediumVioletRed", "MidnightBlue", "MintCream", "MistyRose", "Moccasin",
    "NavajoWhite", "Navy", "OldLace", "Olive", "OliveDrab", "Orange", "OrangeRed", "Orchid", "PaleGoldenRod",
    "PaleGreen", "PaleTurquoise", "PaleVioletRed", "PapayaWhip", "PeachPuff", "Peru", "Pink", "Plum", "PowderBlue",
    "Purple", "Red", "RosyBrown", "RoyalBlue", "SaddleBrown", "Salmon", "SandyBrown", "SeaGreen", "SeaShell", "Sienna",
    "Silver", "SkyBlue", "SlateBlue", "SlateGray", "Snow", "SpringGreen", "SteelBlue", "Tan", "Teal", "Thistle", "Tomato",
    "Turquoise", "Violet", "Wheat", "White", "WhiteSmoke", "Yellow", "YellowGreen"
  ];
  
  // Embaralha as cores e escolhe as 10 primeiras para o jogo
  function getRandomColors() {
    const shuffledColors = [...allColors].sort(() => Math.random() - 0.5);
    return shuffledColors.slice(0, 10);
  }
  
  const gameColors = getRandomColors();
  const selectedColor = gameColors[Math.floor(Math.random() * gameColors.length)];
  
  // Exibe as cores no HTML com o nome errado para as cores incorretas
  const colorOptionsDiv = document.getElementById('color-options');
  gameColors.forEach(color => {
    const colorElement = document.createElement('div');
    const displayName = (color === selectedColor) ? color : getRandomColorName(); // Exibe o nome errado, se não for a cor correta
    colorElement.textContent = displayName;
    colorElement.style.backgroundColor = color;
    colorElement.style.padding = '10px';
    colorElement.style.margin = '5px';
    colorElement.style.color = 'white';
    colorElement.style.textAlign = 'center';
    colorElement.style.borderRadius = '5px';
    colorOptionsDiv.appendChild(colorElement);
  });
  
  // Função para gerar um nome aleatório de cor diferente
  function getRandomColorName() {
    const randomIndex = Math.floor(Math.random() * allColors.length);
    return allColors[randomIndex];
  }
  
  // Função para verificar a resposta do jogador
  function checkGuess() {
    const userInput = document.getElementById('color-input').value.trim();
    const feedbackElement = document.getElementById('feedback');
  
    if (userInput === selectedColor) {
      // Se acertar, muda o fundo da página para a cor correta
      document.body.style.backgroundColor = selectedColor;
      feedbackElement.textContent = 'Você acertou! A cor é ' + selectedColor + '.';
    } else {
      // Se errar, dá uma dica de ordem alfabética
      const sortedColors = [...gameColors].sort();
      const position = sortedColors.indexOf(selectedColor);
      feedbackElement.textContent = `Errou! A cor correta vem ${(position < sortedColors.indexOf(userInput)) ? 'antes' : 'depois'} da sua escolha na ordem alfabética.`;
    }
  }