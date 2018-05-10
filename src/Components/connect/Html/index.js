import React, { Component } from 'react'

import "./index.less";
import { Card, Divider } from 'antd';

export class HtmlSemantics extends Component {
  render() {
    return (
      <Card>
        <Card
          className="infos"
          type="inner"
          title="HTML的语义化"
          >
          <p>一般要了解一个东西，从三方面入手，是什么，为什么和做什么。所以要了解一个东西，先问这个东西是什么，为什么要这样定义这个东西，然后我能用这个东西做什么这样可以让自己快速的理解这个东西。
            第一步：</p>
          <Divider className="splitter" orientation="left">什么是HTML语义化？</Divider>
          <p>我自己的理解是用对的标签做对的事，根据内容的结构化（内容语义化），选择合适的标签（代码语义化）便于开发者阅读与写出更优雅的代码的同时让浏览器的爬虫和机器更好的解析。</p>
          <Divider className="splitter" orientation="left">为什么要语义化？</Divider>
          <ul>
            <li>为了在没有CSS的情况下，页面也能呈现出很好地内容结构、代码结构:为了裸奔时好看；</li>
            <li>用户体验，例如title、alt用于解释名词或解释图片信息、label标签的活用；</li>
            <li>利于SEO和搜索引擎建立良好沟通，有助于爬虫抓取更多的有效信息。爬虫依赖于标签来确定上下文和各个关键字的权重；</li>
            <li>方便其他设备解析（如屏幕阅读器、盲人阅读器、移动设备）以意义的方式来渲染网页；</li>
            <li>便于团队开发和维护，语义化更具可读性，是下一步吧网页的重要动向，遵循W3C标准的团队都遵循这个标准，可以减少差异化。</li>
          </ul>
        </Card>
        <Card
          className="infos"
          type="inner"
          title="HTML规范"
          >
          <p>写html时应注意的？</p>
          <ul>
            <li>尽量少使用无语义的div和span标签</li>
            <li>在语义不明显时，既可以用div和p时，尽量用p标签。因为p在默认情况上有间距，对兼容特殊终端有有利</li>
            <li>不要使用纯样式的标签，如：b，font，u等</li>
            <li>需要强调的文本时，可以包含在strong和em标签中</li>
            <li>使用表格时，标题用caption，表头用thead，主体用tbody。表头和一般单元格要区分开，表头用th，单元格用td</li>
            <li>表单域用fieldset标签包起来，用legend标签说明表单的用途</li>
            <li>使用表格时，标题用caption，表头用thead，主体用tbody。表头和一般单元格要区分开，表头用th，单元格用td</li>
          </ul>
          <p>在编写html代码时，应该严格按照XHTML的标准来编写。</p>
          <dl>
            <dt>区分大小写</dt>
            <dd>虽然在html页面中，写&lt;h&gt;和&lt;H&gt;定义的元素是相同的，但是为了出现不必要的麻烦，还是统一使用小写来编写html代码.</dd>
          </dl>
          <dl>
            <dt>标签正常闭合且正常嵌套元素</dt>
            <dd>页面中，所有元素都应该有相应的结束元素。例如，&lt;body&gt;对应的结束元素是&lt;/body&gt;。其中换行元素&lt;br&gt;也是在右尖括号前面加一个"/"来结束元素。
              而当元素进行嵌套时，必须按照元素的打开顺序进行关闭。</dd>
          </dl>
          <dl>
            <dt>属性必须用双引，并明确所有的属性值</dt>
            <dd>html代码中，包括数值都必须加上双引号，例如：&lt;table width="20"&gt;。而每一个属性都必须要有一个对应的属性值。没有值就用自己的名称作为值。
              例如：&lt;input type="text" name="txt" value="123" checked="checked" /&gt;。其中input中的checked属性是不可取值的，所以就用自己的名称作为值。</dd>
          </dl>
          <dl>
            <dt>特殊字符要用编码表示</dt>
            <dd>在html中，特殊字符用编码表示。这样是为了避免出现浏览器将标签里的内容给解析掉。例如需要在一个p标签里面解释input标签，
              签内编写input应该将"&lt;"符号用&amp;lt;来表示，"&gt;"用&amp;gt;来表示。</dd>
          </dl>
          <dl>
            <dt>正确使用注释</dt>
            <dd>在页面中，使用&lt;!-- 被注释掉的内容 --&gt;。编写注释便于他人读懂你的代码以及维护。</dd>
          </dl>
        </Card>
      </Card>

    )
  }
}
