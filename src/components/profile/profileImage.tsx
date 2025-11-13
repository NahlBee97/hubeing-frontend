export const ProfileImage = () => (
  // This container will be full-width on mobile and fixed-width on large screens
  <div className="layout-content-container flex flex-col w-full lg:w-[360px]">
    <div className="flex w-full grow bg-[#102315] p-4">
      <div className="w-full gap-1 overflow-hidden bg-[#102315] aspect-[2/3] rounded-lg flex">
        <div
          className="w-full bg-center bg-no-repeat bg-cover aspect-auto rounded-lg flex-1"
          style={{
            backgroundImage:
              'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDawez2Qm817s1SpcYEfR_lIEebP2NA3XXTFPclQ4rP2WbYo7KwURW-5zH3sAtgX5bVQxiqHGgvxb6S2trhg1rUyONEyoxvHv-UEXQCE-2Lo24EI_EKRU5uQpcvHIfilB4S82MwMjlwYqjSkkSX0nlOa1LSio8VttysdQGJIYmqJWKPj6oMofd_QKwGSsSfMD4c8rnIWhTkwxbcT3cegsVDG9Wd6h2TK_ADq_LA__zbC22TucNWA6YDmmeNhCsg0unEG78YeIyVoFru")',
          }}
          role="img"
          aria-label="Profile image"
        ></div>
      </div>
    </div>
  </div>
);
