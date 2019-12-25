/**
 * Created by Tomasz Gabrysiak @ Infermedica on 08/02/2017.
 */

const template = (context) => {
  return new Promise((resolve) => {
    resolve(`
      <h5 class="card-title">Welcome to the Symptoms Diagnosis Tool.</h5>
      <div class="card-text">
        <p>We Created This Model in order to show help you Diagnose your symptoms &mdash; an application that mimics doctor's interview and gives you a preliminary diagnosis basing on our mathematical model.</p>
    
        <p>Please click <span class="badge badge-primary">Next</span> to move to the first question.</p>
        <p class="text-muted small"><i class="fa fa-info-circle"></i> This is the welcome screen.</p>
      </div>
    `);
  });
};

export default template;
