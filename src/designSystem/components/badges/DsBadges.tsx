import React from "react";
import { FC } from "react";
import DsBadge from "./DsBadge";

const DsBadges: FC = () => {
  return (
    <section id="ds-badges" className="ds-section">
      <h2 className="ds-section-title">Badges</h2>

      <div className="ds-section-content">

        <div className="ds-section-vaients mb-6">
          <h4 className="varients-title mb-3">simple</h4>
          <div className="space-x-3">
            <DsBadge type="blue" text="Blue" />
            <DsBadge type="blue-light" text="Blue Light" />
            <DsBadge type="green" text="Blue" />
            <DsBadge type="green-light" text="Green Light" />
            <DsBadge type="red" text="Red" />
            <DsBadge type="orange" text="Orange" />
            <DsBadge type="gray" text="Gray" />
            <DsBadge type="gray-light" text="Gray Light" />
            <DsBadge type="black" text="Black" />
            <DsBadge type="white" text="White" />
          </div>
        </div>

        <div className="ds-section-vaients">
          <h4 className="varients-title mb-3">has inner badge</h4>
          <div className="space-x-3">
            <DsBadge type="blue" text="Blue" innerContent={2} />
            <DsBadge type="blue-light" text="Blue Light" innerContent={2} innerCorner />
            <DsBadge type="green" text="Blue" innerContent={2} />
            <DsBadge type="green-light" text="Green Light" innerContent={2} innerCorner />
            <DsBadge type="red" text="Red" innerContent={2} />
            <DsBadge type="orange" text="Orange" innerContent={2} />
            <DsBadge type="gray" text="Gray" innerContent={2} />
            <DsBadge type="gray-light" text="Gray Light" innerContent={2} />
            <DsBadge type="black" text="Black" innerContent={2} innerCorner />
            <DsBadge type="white" text="White" innerContent={2} />
          </div>
        </div>

      </div>

    </section>
  );
};

export default DsBadges;