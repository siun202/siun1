const options = {
  cutoutPercentage: 65,
  animation: {
    easing: 'easeOutQuint' },

  animateScale: true,
  tooltips: {
    enabled: false },

  events: [] };


const skills = [
{
  id: "html_css",
  values: [95, 5] },

{
  id: "sass",
  values: [90, 10] },

{
  id: "jquery",
  values: [90, 10] },

{
  id: "rails",
  values: [66, 34] },

{
  id: "backbone",
  values: [75, 25] },

{
  id: "photoshop",
  values: [66, 34] }];



let offset = 0;

for (const skill of skills) {
  const canvas = document.querySelector(`#${skill.id}`);
  if (!canvas) {continue;}

  const ctx = canvas.getContext('2d');

  setTimeout(() => {
    const chart = new Chart(ctx, {
      type: 'doughnut',
      data: {
        datasets: [{
          data: skill.values,
          backgroundColor: [
          'hsl(120, 40%, 60%)',
          'hsl(0, 0%, 95%)'] }] },



      options: options });

  }, offset);

  offset += 250;
}