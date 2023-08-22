import {colors} from '@atana/operator-styles';

export const theme = `

    .ace_content {
      background: ${colors.sqlGrey}
    }

    .ace-tm .ace_gutter {
      background: ${colors.black};
      color: ${colors.white};
    }

    .ace-tm .ace_marker-layer .ace_active-line {
      background: ${colors.primary};
      opacity: .07;
    }

    .ace-tm .ace_gutter-active-line {
      background: ${colors.sqlGrey}
    }

    .ace-tm {
      color: ${colors.white}
    }

    .ace-tm .ace_comment {
      color: ${colors.scrollGrey}
    }

    .ace-tm .ace_storage, .ace-tm .ace_keyword {
      color: ${colors.light4}
    }

    .ace-tm .ace_support.ace_function {
      color: ${colors.secondary}
    }

    .ace-tm .ace_keyword.ace_operator {
      color: ${colors.light4}
    }

    .ace-tm .ace_constant.ace_numeric {
      color: ${colors.primary}
    }

    .ace-tm .ace_variable {
      color: ${colors.primary}
    }

    .ace-tm .ace_string {
      color: ${colors.primary}
    }


    .ace_ {
      color: ${colors.secondaryDark}
    }

    .ace_editor.ace_autocomplete .ace_completion-highlight{
      color: ${colors.white}

    }

    .ace_rightAlignedText {
      color: ${colors.light3}
    }

    .ace_editor.ace_autocomplete {
      box-shadow: none;
    }

    .ace_autocomplete-tip {
      color: ${colors.primary}
    }

`;
