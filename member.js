function skillsMember() {
  var skills = document.getElementById("skills");
  var member = document.getElementById("member");
  var memberSelect = member.options[member.selectedIndex].value;
  var memberText = member.options[member.selectedIndex].text;
  if (memberSelect == "0") {
    skills.innerHTML = "";
  } else if (memberSelect == "1") {
    skills.innerHTML =
      "<option value='0'>-Select-</option><option value='1'>C</option><option value='2'>C++</option><option value='3'>Java</option><option value='4'>Python</option><option value='5'>HTML</option><option value='6'>CSS</option><option value='7'>JavaScript</option><option value='8'>PHP</option><option value='9'>SQL</option><option value='10'>Swift</option>";
  } else if (memberSelect == "2") {
    skills.innerHTML =
      "<option value='0'>-Select-</option><option value='1'>C</option><option value='2'>C++</option><option value='3'>Java</option><option value='4'>Python</option><option value='5'>HTML</option><option value='6'>CSS</option><option value='7'>JavaScript</option><option value='8'>PHP</option><option value='9'>SQL</option><option value='10'>Swift</option>";
  } else if (memberSelect == "3") {
    skills.innerHTML =
      "<option value='0'>-Select-</option><option value='1'>C</option><option value='2'>C++</option><option value='3'>Java</option><option value='4'>Python</option><option value='5'>HTML</option><option value='6'>CSS</option><option value='7'>JavaScript</option><option value='8'>PHP</option><option value='9'>SQL</option><option value='10'>Swift</option>";
  } else if (memberSelect == "4") {
    skills.innerHTML =
      "<option value='0'>-Select-</option><option value='1'>C</option><option value='2'>C++</option><option value='3'>Java</option><option value='4'>Python</option><option value='5'>HTML</option><option value='6'>CSS</option>";
  } else{
    skills.innerHTML = "";
  }
}