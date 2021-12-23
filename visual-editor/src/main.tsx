import { HTMLText, Repeater, Text, VisualEditor } from 'src/VisualEditor'
import {
  ButtonField,
  ButtonsField,
  ContentField,
  TitleField,
  WithStyles,
} from './shared'

let editor = new VisualEditor()

editor.registerComponent('hero', {
  title: 'Hero',
  fields: WithStyles([TitleField(), ContentField(), ButtonsField()]),
})

editor.registerComponent('pricing', {
  title: 'Pricing',
  category: 'Commerce',
  fields: WithStyles([
    TitleField(),
    ContentField(),
    new Repeater('prices', {
      min: 1,
      max: 5,
      collapsed: 'title',
      fields: [
        new HTMLText('title', {
          label: 'Title',
          default: 'Pro',
          multiline: false,
        }),
        new Text('price', { label: 'Price', default: '15€' }),
        new Text('features', { label: 'Features', multiline: true }),
        ButtonField(),
      ],
    }),
  ]),
})

editor.registerComponent('icons-columns', {
  title: 'Icons columns',
  fields: WithStyles([
    new Repeater('icons', {
      min: 1,
      max: 5,
      collapsed: 'title',
      fields: [
        new Text('title', { label: 'Title', default: 'Featured title' }),
        ContentField(),
      ],
    }),
  ]),
})

editor.registerComponent('text', {
  title: 'Formatted text',
  fields: [ContentField()],
})

editor.defineElement()