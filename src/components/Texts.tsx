import React, { FC } from "react";
import DsText from "../designSystem/components/text/DsText";

const Texts: FC = () => {
  return (
    <section id="ds-texts" className="ds-section">
      <h2 className="ds-section-title">Text</h2>

      <div className="ds-section-content">

        <div className="ds-section-vaients flex-1">

          <h4 className="varients-title">Font family</h4>
          <p className="mb-2"><DsText fontSize="lg" fontFamily="cursive, tahoma">this is a text with custom font-family='cursive, tahoma'</DsText></p>

          <hr className="mb-4" />

          <h4 className="varients-title">Font size</h4>
          <p className="mb-2"><DsText fontSize="xs">"xs" font size</DsText></p>
          <p className="mb-2"><DsText fontSize="sm">"sm" font size</DsText></p>
          <p className="mb-2"><DsText fontSize="base">"base" font size</DsText></p>
          <p className="mb-2"><DsText fontSize="lg">"lg" font size</DsText></p>
          <p className="mb-2"><DsText fontSize="xl">"xl" font size</DsText></p>
          <p className="mb-2"><DsText fontSize="2xl">"2xl" font size</DsText></p>
          <p className="mb-2"><DsText fontSize="3xl">"3xl" font size</DsText></p>
          <p className="mb-2"><DsText fontSize="4xl">"4xl" font size</DsText></p>
          <p className="mb-2"><DsText fontSize="5xl">"5xl" font size</DsText></p>
          <p className="mb-2"><DsText fontSize="6xl">"6xl" font size</DsText></p>
          <p className="mb-2"><DsText fontSize="7xl">"7xl" font size</DsText></p>
          <p className="mb-2"><DsText fontSize="8xl">"8xl" font size</DsText></p>
          <p className="mb-2"><DsText fontSize="9xl">"9xl" font size</DsText></p>
          <p className="mb-2"><DsText className="text-lg" customFontSize={32}>custom font size ={">"} "32px = 2rem"</DsText></p>

          <hr className="mb-4" />

          <h4 className="varients-title">Font Weight</h4>
          <p className="mb-2"><DsText fontWeight="thin">this is a "thin" font weight</DsText></p>
          <p className="mb-2"><DsText fontWeight="extralight">this is a "extraLight" font weight</DsText></p>
          <p className="mb-2"><DsText fontWeight="light">this is a "light" font weight</DsText></p>
          <p className="mb-2"><DsText fontWeight="medium">this is a "medium" font weight</DsText></p>
          <p className="mb-2"><DsText fontWeight="semibold">this is a "semibold" font weight</DsText></p>
          <p className="mb-2"><DsText fontWeight="bold">this is a "bold font weight</DsText></p>
          <p className="mb-2"><DsText fontWeight="extrabold">this is a "extrabold" font weight</DsText></p>
          <p className="mb-2"><DsText fontWeight="black">this is a "black" font weight</DsText></p>

          <hr className="mb-4" />

          <h4 className="varients-title">Font Style</h4>
          <p className="mb-2">
            <DsText italic>
              <span className="text-blue-main">italic:</span> this is "italic" font style
            </DsText>
          </p>
          <p className="mb-2">
            <DsText>
              <span className="text-blue-main">non-italic:</span> this is "non-italic" font style
            </DsText>
          </p>
          

          <hr className="mb-4 mt-4" />

          <h4 className="varients-title">color and hover color</h4>
          <p className="mb-2"><DsText className="text-stone-800">this is a "black" text color</DsText></p>
          <p className="mb-2"><DsText className="text-gray-600">this is a "gray" text color</DsText></p>
          <p className="mb-2"><DsText className="text-blue-600">this is a "blue" text color</DsText></p>
          <p className="mb-2"><DsText className="text-red-600">this is a "red" text color</DsText></p>
          <p className="mb-2"><DsText className="text-yellow-600">this is a "yellow" text color</DsText></p>
          <p className="mb-2"><DsText className="text-orange-600">this is a "orange" text color</DsText></p>
          <p className="mb-2"><DsText className="text-green-600">this is a "green" text color</DsText></p>
          <p className="mb-2"><DsText customColor="#a11fa1">this is a text with custom color</DsText></p>
          <p className="mb-2"><DsText className="stroke-stone-800 hover:text-red-600">this is a text with hover color</DsText></p>

          <hr className="mb-4 mt-4" />

          <h4 className="varients-title">Text align</h4>
          <p className="mb-2">
            <DsText align="left" display="block">
              <span className="text-blue-main">left:</span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam blanditiis dicta officiis nemo repudiandae omnis atque, eaque laborum accusantium ex illo saepe quia repellat quae odit modi ducimus rem facere.
            </DsText>
          </p>
          <p className="mb-2">
            <DsText align="right" display="block">
              <span className="text-blue-main">right:</span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam blanditiis dicta officiis nemo repudiandae omnis atque, eaque laborum accusantium ex illo saepe quia repellat quae odit modi ducimus rem facere.
            </DsText>
          </p>
          <p className="mb-2">
            <DsText align="center" display="block">
              <span className="text-blue-main">center:</span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam blanditiis dicta officiis nemo repudiandae omnis atque, eaque laborum accusantium ex illo saepe quia repellat quae odit modi ducimus rem facere.
            </DsText>
          </p>
          <p className="mb-2">
            <DsText align="justify" display="block">
              <span className="text-blue-main">justify:</span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam blanditiis dicta officiis nemo repudiandae omnis atque, eaque laborum accusantium ex illo saepe quia repellat quae odit modi ducimus rem facere.
            </DsText>
          </p>

          <hr className="mb-4 mt-4" />

          <h4 className="varients-title">truncate</h4>
          <p className="mb-2 w-1/2"><DsText truncate>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam blanditiis dicta officiis nemo repudiandae omnis atque, eaque laborum accusantium ex illo saepe quia repellat quae odit modi ducimus rem facere.</DsText></p>

          <hr className="mb-4 mt-4" />

          <h4 className="varients-title">line clamp</h4>
          <p className="mb-2 w-80">
            <DsText lineClamp="1">
              <span className="text-blue-main">line-clamp-1:</span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam blanditiis dicta officiis nemo repudiandae omnis atque, eaque laborum accusantium ex illo saepe quia repellat quae odit modi ducimus rem facere.
            </DsText>
          </p>
          <p className="mb-2 w-80">
            <DsText lineClamp="2">
              <span className="text-blue-main">line-clamp-2:</span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam blanditiis dicta officiis nemo repudiandae omnis atque, eaque laborum accusantium ex illo saepe quia repellat quae odit modi ducimus rem facere.
            </DsText>
          </p>
          <p className="mb-2 w-80">
            <DsText lineClamp="3">
              <span className="text-blue-main">line-clamp-3:</span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam blanditiis dicta officiis nemo repudiandae omnis atque, eaque laborum accusantium ex illo saepe quia repellat quae odit modi ducimus rem facere.
            </DsText>
          </p>
          <p className="mb-2 w-80">
            <DsText lineClamp="4">
              <span className="text-blue-main">line-clamp-4:</span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam blanditiis dicta officiis nemo repudiandae omnis atque, eaque laborum accusantium ex illo saepe quia repellat quae odit modi ducimus rem facere.
            </DsText>
          </p>
          <p className="mb-2 w-80">
            <DsText lineClamp="5">
              <span className="text-blue-main">line-clamp-5:</span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam blanditiis dicta officiis nemo repudiandae omnis atque, eaque laborum accusantium ex illo saepe quia repellat quae odit modi ducimus rem facere.
            </DsText>
          </p>
          <p className="mb-2 w-72">
            <DsText lineClamp="6">
              <span className="text-blue-main">line-clamp-6:</span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam blanditiis dicta officiis nemo repudiandae omnis atque, eaque laborum accusantium ex illo saepe quia repellat quae odit modi ducimus rem facere.
            </DsText>
          </p>

          <hr className="mb-4 mt-4" />

          <h4 className="varients-title">Text transform</h4>
          <p className="mb-2">
            <DsText>
              <span className="text-blue-main">normal-case:</span> Lorem ipsum DOLOR sit AMET consectetur adipisicing ELIT.
            </DsText>
          </p>
          <p className="mb-2">
            <DsText transform="lowercase">
              <span className="text-blue-main">lowercase: </span>Lorem ipsum dolor sit amet consectetur adipisicing elit
            </DsText>
          </p>
          <p className="mb-2">
            <DsText transform="capitalize">
              <span className="text-blue-main">capitalize:</span> Lorem ipsum dolor sit amet consectetur adipisicing elit
            </DsText>
          </p>
          <p className="mb-2">
            <DsText transform="uppercase">
              <span className="text-blue-main">uppercase: </span>Lorem ipsum dolor sit amet consectetur adipisicing elit
            </DsText>
          </p>

          <hr className="mb-4 mt-4" />

          <h4 className="varients-title">line height</h4>
          <p className="mb-2">
            <DsText lineHeight="0">
              <span className="text-blue-main">line-height-0:</span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam blanditiis dicta officiis nemo repudiandae omnis atque, eaque laborum accusantium ex illo saepe quia repellat quae odit modi ducimus rem facere.
            </DsText>
          </p>
          <p className="mb-2">
            <DsText lineHeight="1">
              <span className="text-blue-main">line-height-1:</span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam blanditiis dicta officiis nemo repudiandae omnis atque, eaque laborum accusantium ex illo saepe quia repellat quae odit modi ducimus rem facere.
            </DsText>
          </p>
          <p className="mb-2">
            <DsText lineHeight="2">
              <span className="text-blue-main">line-height-2:</span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam blanditiis dicta officiis nemo repudiandae omnis atque, eaque laborum accusantium ex illo saepe quia repellat quae odit modi ducimus rem facere.
            </DsText>
          </p>
          <p className="mb-2">
            <DsText lineHeight="3">
              <span className="text-blue-main">line-height-3:</span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam blanditiis dicta officiis nemo repudiandae omnis atque, eaque laborum accusantium ex illo saepe quia repellat quae odit modi ducimus rem facere.
            </DsText>
          </p>
          <p className="mb-2">
            <DsText lineClamp="4">
              <span className="text-blue-main">line-height-4:</span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam blanditiis dicta officiis nemo repudiandae omnis atque, eaque laborum accusantium ex illo saepe quia repellat quae odit modi ducimus rem facere.
            </DsText>
          </p>
          <p className="mb-2">
            <DsText lineClamp="5">
              <span className="text-blue-main">line-height-5:</span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam blanditiis dicta officiis nemo repudiandae omnis atque, eaque laborum accusantium ex illo saepe quia repellat quae odit modi ducimus rem facere.
            </DsText>
          </p>
          <p className="mb-2">
            <DsText lineClamp="6">
              <span className="text-blue-main">line-height-6:</span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam blanditiis dicta officiis nemo repudiandae omnis atque, eaque laborum accusantium ex illo saepe quia repellat quae odit modi ducimus rem facere.
            </DsText>
          </p>
          <p className="mb-2">
            <DsText lineHeight="7">
              <span className="text-blue-main">line-height-7:</span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam blanditiis dicta officiis nemo repudiandae omnis atque, eaque laborum accusantium ex illo saepe quia repellat quae odit modi ducimus rem facere.
            </DsText>
          </p>
          <p className="mb-2">
            <DsText lineHeight="8">
              <span className="text-blue-main">line-height-8:</span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam blanditiis dicta officiis nemo repudiandae omnis atque, eaque laborum accusantium ex illo saepe quia repellat quae odit modi ducimus rem facere.
            </DsText>
          </p>
          <p className="mb-2">
            <DsText lineHeight="9">
              <span className="text-blue-main">line-height-9:</span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam blanditiis dicta officiis nemo repudiandae omnis atque, eaque laborum accusantium ex illo saepe quia repellat quae odit modi ducimus rem facere.
            </DsText>
          </p>
          <p className="mb-2">
            <DsText lineHeight="10">
              <span className="text-blue-main">line-height-10:</span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam blanditiis dicta officiis nemo repudiandae omnis atque, eaque laborum accusantium ex illo saepe quia repellat quae odit modi ducimus rem facere.
            </DsText>
          </p>
          <p className="mb-2">
            <DsText customLineHeight={60}>
              <span className="text-blue-main">custom line-height = 60px(3.75rem):</span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam blanditiis dicta officiis nemo repudiandae omnis atque, eaque laborum accusantium ex illo saepe quia repellat quae odit modi ducimus rem facere.
            </DsText>
          </p>

        </div> {/* end of text */}

      </div>{/* ds-section-content */}

    </section >
  );
};

export default Texts;