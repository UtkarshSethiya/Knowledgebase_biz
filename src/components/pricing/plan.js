import "./plan.css";
import custom from './img/custom.png'
import feature from './img/feature.png'
import ddf from './subscription/dfdfd 1.png'
import tea from './subscription/tea-cup-png-photos 1 (2).png'
import like from './subscription/Facebook Like.png'
import cookie from './subscription/000000 1.png'
import pizza from './subscription/78788 1.png'
import prize from './subscription/Prize.png'
import large from './subscription/66666 1.png'
import trophy from './subscription/Trophy.png'
import cap from './subscription/Graduation Cap.png'


function Plan() {
  return (
    <div>
      <div class="d-flex px-lg-5 mx-lg-5 py-lg-3 flex-wrap">
        <div class="card images-container-1">
          <img
            src={ddf} height='140px'
            class="card-img-top image-1"
            alt="Features"
          />
          <div class="card-body py-2">
            <div class="d-flex align-items-center ms-3">
              <h5 class="card-title card-title-features card-title-features-1">
                <svg
                  width="24"
                  height="24"
                  class="features-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.0002 18.8679L19.2102 23.375L17.2968 14.8804L23.6668 9.16502L15.2785 8.42794L12.0002 0.416687L8.72183 8.42794L0.333496 9.16502L6.7035 14.8804L4.79016 23.375L12.0002 18.8679Z"
                    fill="black"
                  />
                </svg>
                Free
              </h5>
            </div>
            <p class="card-text card-text-features"></p>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item text-center border-bottom-0 m-0 p-0">
              Starting at
            </li>
            <li class="list-group-item fs-4 text-center p-0">
              $ <span>0</span>/month
            </li>
          </ul>
          <div class="card-body m-auto d-flex justify-content-center align-items-center">
            <a href="#" class="btn btn-primary">
              Subscribe
            </a>
          </div>
        </div>
        <div class="imp card images-container-2">
          <img
            src={tea} height='140px'
            class="card-img-top image-2"
            alt="Features"
          />
          <div class="card-body py-2 ">
            <div class="d-flex align-items-center ms-3">
              <img
                src={like}
                class="features-icon"
                alt=""
              />
              <h5 class="card-title card-title-features">Regular</h5>
            </div>
            <p class="card-text card-text-features">
              For small conferences and workshops with 50 attendees per month
              with a Auditorium and booth included along with the choice of your
              event name in bizconnect URL.
            </p>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item text-center border-bottom-0 m-0 p-0">
              Starting at
            </li>
            <li class="list-group-item fs-4 text-center p-0">
              $ <span>0</span>/month
            </li>
          </ul>
          <div class="card-body m-auto d-flex justify-content-center align-items-center">
            <a href="#" class="btn btn-primary">
              Subscribe
            </a>
          </div>
        </div>
        <div class="card images-container-3">
          <img
            src={cookie} 
            height='150px'
            width='150px'
            class="card-img-top image-3"
            alt="Features"
          />
          <div class="card-body py-2">
            <div class="d-flex align-items-center ms-3">
              <img
                src={cap}
                class="features-icon"
                alt=""
              />
              <h5 class="card-title card-title-features">Perfect</h5>
            </div>
            <p class="card-text card-text-features">
              For small interactive events and webinars with 200 attendees per
              month. Engage with your audience and host them on the platform in
              any language of your choice.
            </p>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item text-center border-bottom-0 m-0 p-0">
              Starting at
            </li>
            <li class="list-group-item fs-4 text-center p-0">
              $ <span>0</span>/month
            </li>
          </ul>
          <div class="card-body m-auto d-flex justify-content-center align-items-center">
            <a href="#" class="btn btn-primary">
              Subscribe
            </a>
          </div>
        </div>
        <div class="card images-container-4">
          <img
            src={pizza}
            class="card-img-top image-4"
            alt="Features"
          />
          <div class="card-body py-2">
            <div class="d-flex align-items-center ms-3">
              <img
                src={prize}
                class="features-icon"
                alt=""
              />
              <h5 class="card-title card-title-features">Custom</h5>
            </div>
            <p class="card-text card-text-features">
              For regular events and fairs with 500 attendees per month. Expand
              your connections by networking with attendees that match your
              interests.
            </p>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item text-center border-bottom-0 m-0 p-0">
              Starting at
            </li>
            <li class="list-group-item fs-4 text-center p-0">
              $ <span>0</span>/month
            </li>
          </ul>
          <div class="card-body m-auto d-flex justify-content-center align-items-center">
            <a href="#" class="btn btn-primary">
              Subscribe
            </a>
          </div>
        </div>
        <div class="card images-container-5">
          <img
            src={large} height='150px'
            class="card-img-top image-5"
            alt="Features"
          />
          <div class="card-body py-2">
            <div class="d-flex align-items-center ms-3">
              <img
                src={prize}
                class="features-icon"
                alt=""
              />
              <h5 class="card-title card-title-features">Features</h5>
            </div>
            <p class="card-text card-text-features">
              For large events, expos and summits with 1000 attendees per month.
              Build the most visually striking event with moving banners and
              customize it in any way you want. Talk to us to explore the
              unlimited possibilities!
            </p>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item text-center border-bottom-0 m-0 p-0">
              Starting at
            </li>
            <li class="list-group-item fs-4 text-center p-0">
              $ <span>0</span>/month
            </li>
          </ul>
          <div class="card-body m-auto d-flex justify-content-center align-items-center">
            <a href="#" class="btn btn-primary">
              Subscribe
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Plan;
