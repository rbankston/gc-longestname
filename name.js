name1 = "Ada lovelace3";
name3 = "Ada lovelace2";
name2 = "Charles";


function longestString(name1, name2, name3) {
  let longest = "";
  let name1Length = name1.length;
  let name2Length = name2.length;
  let name3Length = name3.length;

  if (name1Length === name2Length && name1Length === name3Length) {
    return [name1, name2, name3]
  } else if (name1Length > name2Length && name1Length > name3Length) {
     return [name1]
  } else if (name2Length > name1Length && name2Length > name3Length) {
    return [name2]
  } else if (name3Length > name1Length && name3Length > name2Length) {
    return [name3]
  } else if (name3Length > name1Length && name3Length === name2Length) {
    return [name2, name3]
  } else if (name1Length === name3Length && name1Length > name2Length) {
    return [name1, name3]
  } else if (name1Length === name2Length && name2Length > name3Length) {
    return [name1, name2]
  }
}

let longestName = longestString(name1, name2, name3);

console.log(longestName);

switch (longestName.length) {
    case 3:
        console.log(`All three names, ${longestName[0]}, ${longestName[1]},  and ${longestName[2]} are the same length.`)
        break;
    case 2:
        console.log(`${longestName[0]} and ${longestName[1]} tie for the longest name.`);
        break;
    default:
        console.log(`${longestName[0]} has the longest name`);
        break;
}