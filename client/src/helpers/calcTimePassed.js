function calcTimePassed(time) {

  let t = {}
  let milis = Date.now() - time;
  t.seconds = Math.floor(milis / 1000);
  t.minutes = Math.floor(t.seconds / 60);
  t.hours = Math.floor(t.minutes / 60);
  t.days = Math.floor(t.hours / 24);
  t.weeks = Math.floor(t.days / 7);
  t.months = Math.floor(t.weeks / 4);
  t.years = Math.floor(t.months / 12);

  let timeString = "Just now";
  for (let unit in t) {
    if (t[unit] > 0)
      timeString = `${t[unit]} ${t[unit] > 1 ? unit : unit.split('s')[0]}`;
    else return timeString;
  }

}

export default calcTimePassed;