import React, { useState } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { ChevronLeft32, ChevronRight32 } from '@carbon/icons-react';

import { settings } from '../../constants/Settings';
import Button from '../Button/Button';

const { iotPrefix } = settings;

const propTypes = {
  /** true if the legend should be full bleed  and occupy the full width of the map  */
  isFullWidth: PropTypes.bool.isRequired,
  /** true if the legend is collapsed (only relevant for isFullWidth:true) */
  isCollapsed: PropTypes.bool.isRequired,
  /** true if there should be extra wide margins, like when a card is expanded to full page */
  increasedMargin: PropTypes.bool,
  titleText: PropTypes.string,
  hideLegendText: PropTypes.string,
  showLegendText: PropTypes.string,
  onCollapsToggle: PropTypes.func,
  testId: PropTypes.string,
};

const defaultProps = {
  titleText: 'Legend',
  hideLegendText: 'Hide legend',
  showLegendText: 'Show legend',
  increasedMargin: false,
  testId: 'map-legend',
};

const Legend = ({
  increasedMargin,
  isFullWidth,
  stops,
  titleText,
  hideLegendText,
  showLegendText,
  isCollapsed,
  onCollapsToggle,
  testId,
}) => {
  const renderLegendKeys = (stop, i) => {
    return (
      <div key={i} className={`${iotPrefix}--map-legend-keys`}>
        <span
          className={`${iotPrefix}--map-legend-keys-color`}
          style={{ backgroundColor: stop[1] }}
        />
        <span
          className={`${iotPrefix}--map-legend-keys-value`}
        >{`${stop[0].toLocaleString()}`}</span>
      </div>
    );
  };

  return isFullWidth ? (
    <div
      data-testid={testId}
      className={classnames(`${iotPrefix}--map-legend`, `${iotPrefix}--map-legend__fullwidth`, {
        [`${iotPrefix}--map-legend__fullwidth--collapsed`]: isCollapsed,
      })}
    >
      <Button
        data-testid={`${testId}-collapse-toggle`}
        className={`${iotPrefix}--map-legend__collapse-btn`}
        kind="ghost"
        size="small"
        renderIcon={
          (document.dir === 'ltr' && isCollapsed) || (document.dir === 'rtl' && !isCollapsed)
            ? ChevronRight32
            : ChevronLeft32
        }
        hasIconOnly
        iconDescription={isCollapsed ? showLegendText : hideLegendText}
        tooltipPosition={document.dir === 'rtl' ? 'left' : 'right'}
        onClick={onCollapsToggle}
      />

      <div className={`${iotPrefix}--map-legend-content`}>
        <div title={titleText} className={`${iotPrefix}--map-legend__label`}>
          {titleText}
        </div>
        <div className={`${iotPrefix}--map-legend-keys-container`}>
          {stops.map(renderLegendKeys)}
        </div>
      </div>
    </div>
  ) : (
    <div
      data-testid={testId}
      className={classnames(`${iotPrefix}--map-legend`, {
        [`${iotPrefix}--map-legend--increased-margin`]: increasedMargin,
      })}
    >
      {stops.map(renderLegendKeys)}
    </div>
  );
};

Legend.defaultProps = defaultProps;
Legend.propTypes = propTypes;
export default Legend;
