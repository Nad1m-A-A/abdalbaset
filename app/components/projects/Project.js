"use client";
import classes from './project.module.css'
import Image from "next/image";
import { useState } from "react";
function Project({images : projectImages, title : projectTItle, large = false}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const changeMainImg = (imgIndex) => {
    setActiveIndex(imgIndex);
  };
  return (
    <div className={`${classes.project_page} fade_in`}>
      <h3 className={`-z-10 responsive_text md:text-base inline-block py-2 px-4 rounded-sm project_title`}>
        {projectTItle}
      </h3>
      <div className={`${classes.project_images}`}>
        <div className={`${classes.main_img_wrapper} ${classes.main_img_animation}`}>
          <Image
            className={`rounded-sm shadow-md ${classes.main_img} ${large ? classes.large_main_img : ''}`}
            width={1000}
            height={600}
            src={projectImages[activeIndex].src}
            alt={projectTItle}
            placeholder='blur'
            blurDataURL={projectImages[activeIndex].placeholder}
          />
        </div>
        <div className={`${classes.preview_images}`}>
          {projectImages.map((img, i) => {
            return (
              <div className={classes.preview_images_animation }>
                <Image
                placeholder='blur'
                blurDataURL={img.placeholder}
                  onClick={() => changeMainImg(i)}
                  className={`${
                    activeIndex === i ? classes.active_img : ""}`}
                  key={i}
                  width={400}
                  height={400}
                  src={img.src}
                  alt={img.alt}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Project;
