(function()
  {  
    window.addEventListener('load', () =>
    {
      const section = document.querySelector(".cases-slider.swiper-container .swiper-wrapper");
      if (section)
      {
        section.style.transition = 'height, .3s linear';
        const slide_containers = document.querySelectorAll(".cases-slider.swiper-container .case-slide");
        const slide_containers_title = document.querySelectorAll(".cases-slider.swiper-container .case-slide .title");
        const slide_containers_containers = document.querySelectorAll(".cases-slider.swiper-container .case-slide .container");
        const right_containers = document.querySelectorAll(".cases-slider.swiper-container .case-slide .case-slide__right .case-slide__main");
        const block_absolute = document.querySelectorAll(".case-slide__right__absolute");
        let height_screen = document.documentElement.clientHeight / 2;
        const arrows = document.querySelectorAll(".cases-slider.swiper-container .swiper-nav .ic");
        let max_height = 0;
        const max_arr = [];
        const mql_desktop = window.matchMedia('all and (min-width: 1025px)');
        const mql_mobile = window.matchMedia('all and (max-width: 767px)');
        let interval;
        let interval_mobile;
        
        const arrow_top = () =>
        {
          for (let i = 0; i < arrows.length; i++)
          {
            arrows[i].style.top = (height_screen - 18 - slide_containers_title[0].offsetHeight - 35) + 'px';
          }
        }
  
        const arrow_top_none = () =>
        {
          for (let i = 0; i < arrows.length; i++)
          {
            arrows[i].style.top = 0 + 'px';
          }
        }
  
        const max_h = (arr_h) =>
        {
          for (let a = 0; a < arr_h.length; a++)
          {
            if (arr_h[a] > max_height)
            {
              max_height = arr_h[a];
            }
          }
        }
  
        const start_script = () =>
        {
          for (let i = 0; i < slide_containers_title.length; i++)
          {
            max_arr[i] = slide_containers_title[i].offsetHeight + 35 + slide_containers_containers[i].offsetHeight;
          }
        }
        
        const add_height = () =>
        {
          for (let i = 0; i < slide_containers.length; i++)
          {
            if (slide_containers[i].classList.contains('swiper-slide-active'))
            {
              section.style.height = max_arr[i] + 'px';
            }
          }
        }
  
        const cancel_height_containers = () =>
        {
          for (let i = 0; i < slide_containers.length; i++)
          {
            right_containers[i].style.height = 'auto';
          }
        }
  
        const start_script_mobile = () =>
        {
          for (let i = 0; i < right_containers.length; i++)
          {
            right_containers[i].style.transition = 'height, .6s linear';
            max_arr[i] = right_containers[i].offsetHeight;
          }
          max_h(max_arr);
        }
  
        const add_all_height = (all_height) =>
        {
          for (let i = 0; i < slide_containers.length; i++)
          {
            right_containers[i].style.height = all_height + 'px';
            block_absolute[i].style.height = (all_height - 55) + 'px';
          }
        }
  
        const add_height_mobile = () =>
        {
          for (let i = 0; i < slide_containers.length; i++)
          {
            if (slide_containers[i].classList.contains('swiper-slide-active'))
            {
              block_absolute[i].style.height = (max_arr[i] - 55) + 'px';
              add_all_height(max_arr[i]);
              right_containers[i].style.height = max_arr[i] + 'px';
            }
          }
        }
        
        if (mql_desktop.matches)
        {
          arrow_top();
          start_script();
          add_height();      
          interval = setInterval(add_height, 300);
        }
        else if (mql_mobile.matches)
        {
          start_script_mobile();
          add_height_mobile();
          interval_mobile = setInterval(add_height_mobile, 300);
        }
        
        window.addEventListener('resize', () =>
        {
          if (mql_desktop.matches)
          {
            height_screen = document.documentElement.clientHeight / 2;
            arrow_top();
            if (interval)
            {
              clearInterval(interval);
            }
            if (interval_mobile)
            {
              clearInterval(interval_mobile);
            }
            cancel_height_containers();
            interval = setInterval(add_height, 300);
            section.style.height = 'auto';
            cancel_height_containers();
            start_script();      
            add_height();
          }
          else if (mql_mobile.matches)
          {         
            arrow_top_none();
            if (interval)
            {
              clearInterval(interval);
            }
            if (interval_mobile)
            {
              clearInterval(interval_mobile);
            }
            section.style.height = 'auto';
            cancel_height_containers();
            start_script_mobile();
            add_height_mobile();
            interval_mobile = setInterval(add_height_mobile, 300);
          }
          else
          {         
            for (let i = 0; i < arrows.length; i++)
            {
              arrows[i].style.top = 200 + 'px';
            }
            if (interval)
            {
              clearInterval(interval);
            }
            if (interval_mobile)
            {
              clearInterval(interval_mobile);
            }
            cancel_height_containers();
            section.style.height = 'auto';
          }
        });        
      }
    });
  })
();