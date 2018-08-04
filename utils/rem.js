// 반응형 웹을 위한 px -> rem

import rem from 'polished/lib/helpers/rem'

const _rem = size => rem(size, '16px')

export default _rem
