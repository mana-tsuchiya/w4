const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

const storyText = 'その日は、とても暑かった。 :insertx:は外に出た。 彼は:inserty:に向かった。 目的地に向かう途中、:insertz:。 :insertx:はそれに驚いたが、Bobはそれに動じない。 それにしても今日は暑い。';
const insertX = ['おしゃい', '折笠千斗', 'サルノリ'];
const insertY = ['友達の家', '新宿', 'セブンイレブン'];
const insertZ = ['雨が降ってきた', '犬に吠えられた', '園児のお散歩を目撃した'];

randomize.addEventListener('click', result);

function result() {
  let newStory = storyText;

  const xItem = randomValueFromArray(insertX);
  const yItem = randomValueFromArray(insertY);
  const zItem = randomValueFromArray(insertZ);

  newStory = newStory.replace(':insertx:',xItem);
  newStory = newStory.replace(':insertx:',xItem);
  newStory = newStory.replace(':inserty:',yItem);
  newStory = newStory.replace(':insertz:',zItem);

  if (customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace('Bob', name);
  }

  /*if (document.getElementById("jp").checked) {
    const weight = `${Math.round(300*0.0714286)} stone`;
    const temperature =  `${Math.round((94-32) * 5 / 9)} centigrade`;
    newStory = newStory.replace('94 fahrenheit', temperature);
    newStory = newStory.replace('300 pounds', weight);
  }*/

  story.textContent = newStory;
  story.style.visibility = 'visible';
}
