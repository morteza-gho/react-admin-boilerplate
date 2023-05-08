import React, { FC } from "react";
import DsAvatar from './../designSystem/components/avatars/DsAvatar';

const Avatars: FC = () => {
  return (
    <section id="ds-avatars" className="ds-section">
      <h2 className="ds-section-title">Avatars</h2>

      <div className="ds-section-content">

        <div className="flex flex-col w-full md:flex-row mb-4">

          <div className="ds-section-vaients flex-1">
            <h4 className="varients-title">Circle - XSmall</h4>
            <div className="flex gap-x-4">
              <DsAvatar type="circle" size="xs" image="https://i.pravatar.cc/400?img=12" alt="xsmall avatar" />
              <DsAvatar type="circle" size="xs" image="https://i.pravatar.cc/400?img=30" alt="xsmall avatar" hasBadge badgeColor="green" />
              <DsAvatar type="circle" size="xs" image="https://i.pravatar.cc/400?img=2" alt="xsmall avatar" hasBadge badgeColor="red" badgeContent="5" />
            </div>
          </div>

          <div className="ds-section-vaients flex-1">
            <h4 className="varients-title">Rounded - XSmall</h4>
            <div className="flex gap-x-4">
              <DsAvatar type="rounded" size="xs" image="https://i.pravatar.cc/400?img=12" alt="xsmall avatar" />
              <DsAvatar type="rounded" size="xs" image="https://i.pravatar.cc/400?img=30" alt="xsmall avatar" hasBadge badgeColor="green" />
              <DsAvatar type="rounded" size="xs" image="https://i.pravatar.cc/400?img=2" alt="xsmall avatar" hasBadge badgeColor="red" badgeContent="5" />
            </div>
          </div>

        </div> {/* end of xsmall */}

        <div className="flex flex-col w-full md:flex-row mb-4">

          <div className="ds-section-vaients flex-1">
            <h4 className="varients-title">Circle - Small</h4>
            <div className="flex gap-x-4">
              <DsAvatar type="circle" size="sm" image="https://i.pravatar.cc/400?img=12" alt="small avatar" />
              <DsAvatar type="circle" size="sm" image="https://i.pravatar.cc/400?img=30" alt="small avatar" hasBadge badgeColor="green" />
              <DsAvatar type="circle" size="sm" image="https://i.pravatar.cc/400?img=2" alt="small avatar" hasBadge badgeColor="red" badgeContent="5" />
            </div>
          </div>

          <div className="ds-section-vaients flex-1">
            <h4 className="varients-title">Rounded - Small</h4>
            <div className="flex gap-x-4">
              <DsAvatar type="rounded" size="sm" image="https://i.pravatar.cc/400?img=12" alt="small avatar" />
              <DsAvatar type="rounded" size="sm" image="https://i.pravatar.cc/400?img=30" alt="small avatar" hasBadge badgeColor="green" />
              <DsAvatar type="rounded" size="sm" image="https://i.pravatar.cc/400?img=2" alt="small avatar" hasBadge badgeColor="red" badgeContent="5" />
            </div>
          </div>

        </div> {/* end of small */}

        <div className="flex flex-col w-full md:flex-row mb-4">

          <div className="ds-section-vaients flex-1">
            <h4 className="varients-title">Circle - Medium</h4>
            <div className="flex gap-x-4">
              <DsAvatar type="circle" size="md" image="https://i.pravatar.cc/400?img=12" alt="small avatar" />
              <DsAvatar type="circle" size="md" image="https://i.pravatar.cc/400?img=30" alt="small avatar" hasBadge badgeColor="green" />
              <DsAvatar type="circle" size="md" image="https://i.pravatar.cc/400?img=2" alt="small avatar" hasBadge badgeColor="red" badgeContent="5" />
            </div>
          </div>

          <div className="ds-section-vaients flex-1">
            <h4 className="varients-title">Rounded - Medium</h4>
            <div className="flex gap-x-4">
              <DsAvatar type="rounded" size="md" image="https://i.pravatar.cc/400?img=12" alt="small avatar" />
              <DsAvatar type="rounded" size="md" image="https://i.pravatar.cc/400?img=30" alt="small avatar" hasBadge badgeColor="green" />
              <DsAvatar type="rounded" size="md" image="https://i.pravatar.cc/400?img=2" alt="small avatar" hasBadge badgeColor="red" badgeContent="5" />
            </div>
          </div>

        </div> {/* end of medium */}

        <div className="flex flex-col w-full md:flex-row mb-4">

          <div className="ds-section-vaients flex-1">
            <h4 className="varients-title">Circle - Large</h4>
            <div className="flex gap-x-2">
              <DsAvatar type="circle" size="lg" image="https://i.pravatar.cc/400?img=12" alt="small avatar" />
              <DsAvatar type="circle" size="lg" image="https://i.pravatar.cc/400?img=30" alt="small avatar" hasBadge badgeColor="green" />
              <DsAvatar type="circle" size="lg" image="https://i.pravatar.cc/400?img=2" alt="small avatar" hasBadge badgeColor="red" badgeContent="5" />
            </div>
          </div>

          <div className="ds-section-vaients flex-1">
            <h4 className="varients-title">Rounded - Large</h4>
            <div className="flex gap-x-2">
              <DsAvatar type="rounded" size="lg" image="https://i.pravatar.cc/400?img=12" alt="small avatar" />
              <DsAvatar type="rounded" size="lg" image="https://i.pravatar.cc/400?img=30" alt="small avatar" hasBadge badgeColor="green" />
              <DsAvatar type="rounded" size="lg" image="https://i.pravatar.cc/400?img=2" alt="small avatar" hasBadge badgeColor="red" badgeContent="5" />
            </div>
          </div>

        </div> {/* end of large */}

      </div> {/* .ds-section-content */}

    </section>
  );
};

export default Avatars;