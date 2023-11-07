function addContato() {
  const contatoSection = document.getElementById("contacts-list");
  const h3 = document.createElement("h3");
  h3.innerText = "Contato ";

  const ul = document.createElement("ul");
  const nameLi = document.createElement("li");
  nameLi.innerText = "Seu nome:";
  const nameInput = document.createElement("input");
  nameInput.type = "text";
  nameInput.name = "fullname";
  nameLi.appendChild(nameInput);
  ul.appendChild(nameLi);
  ul.appendChild(document.createElement("br"));

  const phoneLi = document.createElement("li");
  phoneLi.innerText = "Seu telefone:";
  const phoneInput = document.createElement("input");
  phoneInput.type = "cel";
  phoneInput.name = "phone";
  phoneLi.appendChild(phoneInput);
  ul.appendChild(phoneLi);
  ul.appendChild(document.createElement("br"));

  const addressLi = document.createElement("li");
  addressLi.innerHTML = "<label for = 'address'>Seu endereço: </label>";
  const addressInput = document.createElement("input");
  addressInput.type = "text";
  addressInput.name = "address";
  addressInput.id = "address";
  addressLi.appendChild(addressInput);
  ul.appendChild(addressLi);
  ul.appendChild(document.createElement("br"));

  contatoSection.append(h3, ul);
}

function removerContato() {
  const contatoSection = document.getElementById("contacts-list");
  const titles = document.getElementsByTagName("h3");
  const contacts = document.getElementsByTagName("ul");

  contatoSection.removeChild(titles[titles.length - 1]);
  contatoSection.removeChild(contacts[contacts.length - 1]);
}
