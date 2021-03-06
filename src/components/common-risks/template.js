/**
 * Created by Tomasz Gabrysiak @ Infermedica on 08/02/2017.
 */

import html from '../../templates/helpers';

const template = (context) => {
  return new Promise((resolve) => {
    context.api.getRiskFactors().then((risks) => {
      resolve(html`
          <h5 class="card-title">Please check all that apply to you.</h5>
          <div class="card-text">
            <form>
              ${risks.map(risk => {
                if (context.commonRiskFactors.indexOf(risk.id) >= 0) {
                  return html`
                    <div class="custom-control custom-checkbox">
                      <input id="${risk.id}" type="checkbox" class="input-risk custom-control-input">
                      <label for="${risk.id}" class="custom-control-label custom-checkbox mb-2 mr-sm-2 mb-sm-0">${risk.name}</label>
                    </div>
                  `;
                }
              })}
            </form>
            <p class="text-muted small"><i class="fa fa-info-circle"></i> Above you see the most common risk factors.</p>
          </div>
        `);
    });
  });
};

export default template;
