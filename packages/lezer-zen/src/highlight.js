import { styleTags, tags as t } from '@lezer/highlight';

export const zenHighlight = styleTags({
  'TemplateString': t.special(t.string),
  'BooleanLiteral': t.bool,
  'null': t.null,
  'VariableName': t.variableName,
  'CallExpression/VariableName TaggedTemplateExpression/VariableName': t.function(t.variableName),
  'PropertyName': t.propertyName,
  'CallExpression/MemberExpression/PropertyName': t.function(t.propertyName),
  'PropertyDefinition': t.definition(t.propertyName),
  'Number': t.number,
  'String': t.string,
  'Escape': t.escape,
  'ArithOp': t.arithmeticOperator,
  'LogicOp': t.logicOperator,
  'and or': t.logicOperator,
  'CallbackReference': t.self,
  'CompareOp': t.compareOperator,
  ':': t.punctuation,
  '( )': t.paren,
  '[ ]': t.squareBracket,
  '{ }': t.brace,
  'InterpolationStart InterpolationEnd': t.brace,
  '.': t.derefOperator,
  ', ;': t.separator,
});
