import equal from 'fast-deep-equal/es6/react';
import type React from 'react';
import { useEffect, useRef } from 'react';
import { useDebouncedCallback } from 'use-debounce';

import {
  type DecisionGraphStoreType,
  type DecisionGraphType,
  useDecisionGraphActions,
  useDecisionGraphRaw,
  useDecisionGraphState,
} from './context/dg-store.context';

export type DecisionGraphEmptyType = {
  id?: string;
  defaultValue?: DecisionGraphType;
  value?: DecisionGraphType;

  disabled?: boolean;
  configurable?: boolean;

  components?: DecisionGraphStoreType['state']['components'];
  customNodes?: DecisionGraphStoreType['state']['customNodes'];

  defaultActivePanel?: string;
  panels?: DecisionGraphStoreType['state']['panels'];
  onPanelsChange?: DecisionGraphStoreType['listeners']['onPanelsChange'];

  onChange?: DecisionGraphStoreType['listeners']['onChange'];
  onReactFlowInit?: DecisionGraphStoreType['listeners']['onReactFlowInit'];
};

export const DecisionGraphEmpty: React.FC<DecisionGraphEmptyType> = ({
  id,
  defaultValue,
  value,
  disabled = false,
  configurable = true,
  onChange,
  components,
  customNodes,
  defaultActivePanel,
  panels,
  onPanelsChange,
  onReactFlowInit,
}) => {
  const mountedRef = useRef(false);
  const graphActions = useDecisionGraphActions();
  const { stateStore, listenerStore } = useDecisionGraphRaw();
  const { decisionGraph } = useDecisionGraphState(({ decisionGraph }) => ({
    decisionGraph,
  }));

  const innerChange = useDebouncedCallback((graph: DecisionGraphType) => {
    onChange?.(graph);
  }, 100);

  useEffect(() => {
    stateStore.setState({
      id,
      disabled,
      configurable,
      components: Array.isArray(components) ? components : [],
      customNodes: Array.isArray(customNodes) ? customNodes : [],
      panels,
    });
  }, [id, disabled, configurable, components, customNodes, panels]);

  useEffect(() => {
    listenerStore.setState({
      onReactFlowInit,
      onPanelsChange,
    });
  }, [onReactFlowInit, onPanelsChange]);

  useEffect(() => {
    listenerStore.setState({ onChange: innerChange });
  }, [innerChange]);

  useEffect(() => {
    if (mountedRef.current && value !== undefined && !equal(value, decisionGraph)) {
      graphActions.setDecisionGraph(value);
    }
  }, [value]);

  useEffect(() => {
    if (value !== undefined) {
      graphActions.setDecisionGraph(value);
    } else if (defaultValue !== undefined) {
      graphActions.setDecisionGraph(defaultValue);
    }

    stateStore.setState({
      activePanel: defaultActivePanel,
    });
    mountedRef.current = true;
  }, []);

  return null;
};