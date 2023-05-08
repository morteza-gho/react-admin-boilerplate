import React, { FC } from "react";
import DsBadge from "../designSystem/components/badges/DsBadge";

const Badges: FC = () => {
  return (
    <section id="ds-badges" className="ds-section">
      <h2 className="ds-section-title">Badges</h2>

      <div className="ds-section-content">

        <div className="ds-section-vaients mb-6">
          <h4 className="varients-title mb-3">Simple</h4>
          <div className="space-x-3">
            <DsBadge type="default" text="default" />
            <DsBadge type="dark" text="dark" />
            <DsBadge type="light" text="light" />
            <DsBadge type="green" text="green" />
            <DsBadge type="red" text="red" />
            <DsBadge type="yellow" text="yellow" />
            <DsBadge type="orange" text="orange" />
            <DsBadge type="purple" text="purple" />
          </div>
        </div>

        <div className="ds-section-vaients mb-6">
          <h4 className="varients-title mb-3">Light</h4>
          <div className="space-x-3">
            <DsBadge type="default-light" text="default" />
            <DsBadge type="dark-light" text="dark" />
            <DsBadge type="green-light" text="green" />
            <DsBadge type="red-light" text="red" />
            <DsBadge type="yellow-light" text="yellow" />
            <DsBadge type="orange-light" text="orange" />
            <DsBadge type="purple-light" text="purple" />
          </div>
        </div>

        <div className="ds-section-vaients">
          <h4 className="varients-title mb-3">Has inner badge</h4>
          <div className="space-x-3">
            <DsBadge type="default" text="default" innerContent={2} />
            <DsBadge type="dark" text="dark" innerContent={2} />
            <DsBadge type="light" text="light" innerContent={2} />
            <DsBadge type="green" text="green" innerContent={2} />
            <DsBadge type="red" text="red" innerContent={2} />
            <DsBadge type="yellow" text="yellow" innerContent={2} innerCorner />
            <DsBadge type="orange" text="orange" innerContent={2} />
            <DsBadge type="purple" text="purple" innerContent={2} />
          </div>
        </div>

      </div>

    </section>
  );
};

export default Badges;