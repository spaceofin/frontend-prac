export const Bootstrap = () => {
  return (
    <div class="container-fluid gradient-background px-3 py-2">
      <div class="row flex-lg-row-reverse align-items-center g-5 pb-5 pl-5">
        <div class="col-10 col-sm-5 col-lg-6 cat-img ">
          <img
            // src={`${process.env.PUBLIC_URL}/assets/images/cat.png`}
            src="assets/images/cat.png"
            alt="sitting cat"
            height="400px"
          />
        </div>
        <div class="col-lg-6">
          <h1 class="display-5 fw-bold text-body-emphasis lh-1 mb-3">
            Meet Your Cat Nearby
          </h1>
          <div class="d-grid gap-2 d-md-flex justify-content-md-start">
            <button type="button" class="btn btn-download">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-google-play"
                viewBox="0 0 16 16"
              >
                <path d="M14.222 9.374c1.037-.61 1.037-2.137 0-2.748L11.528 5.04 8.32 8l3.207 2.96zm-3.595 2.116L7.583 8.68 1.03 14.73c.201 1.029 1.36 1.61 2.303 1.055zM1 13.396V2.603L6.846 8zM1.03 1.27l6.553 6.05 3.044-2.81L3.333.215C2.39-.341 1.231.24 1.03 1.27" />
              </svg>
              <span class="text-download">Download</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
