/* eslint-disable no-shadow */
import React from 'react'
import {
  sortableContainer,
  sortableElement,
  sortableHandle,
} from 'react-sortable-hoc'
import { onSortEnd } from 'actions'
import { connect } from 'react-redux'
import Icon from '@material-ui/core/Icon'
import { Drag } from 'mdi-material-ui'
import QuestionCard from './questionCard'

const DragHandle = sortableHandle(() => (
  <span style={{ cursor: 'grab' }}>
    <Drag>XXXXX</Drag>
  </span>
))

const SortableItem = sortableElement(({ item, index }) => (
  <QuestionCard {...item} index={index} DragHandle={DragHandle} />
))

const SortableContainer = sortableContainer(({ children }) => (
  <div>{children}</div>
))

const SortableList = ({ items, onSortEnd }) => (
  <SortableContainer onSortEnd={onSortEnd} useDragHandle>
    {items.map((item, index) => (
      <SortableItem key={`item-${index}`} index={index} item={item} />
    ))}
  </SortableContainer>
)

export default connect(
  state => ({ questions: state.workflow.questions }),
  { onSortEnd }
)(SortableList)