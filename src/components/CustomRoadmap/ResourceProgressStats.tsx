import { HelpCircle } from 'lucide-react';
import { cn } from '../../lib/classname';
import type { ResourceType } from '../../lib/resource-progress';
import { ProgressShareButton } from '../UserProgress/ProgressShareButton';
import type { AllowedRoadmapVisibility } from './CustomRoadmap';

type ResourceProgressStatsProps = {
  resourceId: string;
  resourceType: ResourceType;
  isSecondaryBanner?: boolean;
  canShare?: boolean;
  shareLink?: string;
};

export function ResourceProgressStats(props: ResourceProgressStatsProps) {
  const {
    resourceId,
    resourceType,
    isSecondaryBanner = false,
    canShare,
    shareLink,
  } = props;

  return (
    <>
      <div
        data-progress-nums-container
        className={cn(
          'striped-loader relative hidden items-center justify-between bg-white px-2 py-1.5 sm:flex',
          {
            'rounded-bl-md rounded-br-md': isSecondaryBanner,
            'rounded-md': !isSecondaryBanner,
          }
        )}
      >
        <p
          className="flex text-sm opacity-0 transition-opacity duration-300"
          data-progress-nums
        >
          <span className="mr-2.5 rounded-sm bg-yellow-200 px-1 py-0.5 text-xs font-medium uppercase text-yellow-900">
            <span data-progress-percentage>0</span>% Done
          </span>

          <span className="itesm-center hidden md:flex">
            <span>
              <span data-progress-done>0</span> completed
            </span>
            <span className="mx-1.5 text-gray-400">&middot;</span>
            <span>
              <span data-progress-learning>0</span> in progress
            </span>
            <span className="mx-1.5 text-gray-400">&middot;</span>
            <span>
              <span data-progress-skipped>0</span> skipped
            </span>
            <span className="mx-1.5 text-gray-400">&middot;</span>
            <span>
              <span data-progress-total>0</span> Total
            </span>
          </span>
          <span className="md:hidden">
            <span data-progress-done>0</span> of{' '}
            <span data-progress-total>0</span> Done
          </span>
        </p>

        <div
          className="flex items-center gap-3 opacity-0 transition-opacity duration-300"
          data-progress-nums
        >
          <ProgressShareButton
            canShare={canShare}
            shareUrl={shareLink}
            resourceId={resourceId}
            resourceType={resourceType}
          />
          <button
            data-popup="progress-help"
            className="flex items-center gap-1 text-sm font-medium text-gray-500 opacity-0 transition-opacity hover:text-black"
            data-progress-nums
          >
            <HelpCircle className="h-3.5 w-3.5 stroke-[2.5px]" />
            Track Progress
          </button>
        </div>
      </div>

      <div
        data-progress-nums-container
        className="striped-loader relative -mb-2 flex items-center justify-between rounded-md border bg-white px-2 py-1.5 text-sm text-gray-700 sm:hidden"
      >
        <span
          data-progress-nums
          className="text-gray-500 opacity-0 transition-opacity duration-300"
        >
          <span data-progress-done>0</span> of{' '}
          <span data-progress-total>0</span> Done
        </span>

        <div
          className="flex items-center gap-2 opacity-0 transition-opacity duration-300"
          data-progress-nums
        >
          <ProgressShareButton
            canShare={canShare}
            shareUrl={shareLink}
            resourceId={resourceId}
            resourceType={resourceType}
          />
        </div>
      </div>
    </>
  );
}