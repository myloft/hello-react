"use client"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import ReactMarkdown from 'react-markdown';

const VerticalTabs = () => (
  <Tabs defaultValue="one" className="flex gap-2">
    <TabsList className="flex flex-col gap-2 h-fit">
      <TabsTrigger value="one">联合国KIP国际学院</TabsTrigger>
      <TabsTrigger value="two">联合国地方经济发展局</TabsTrigger>
      <TabsTrigger value="three">联合国南南合作发展与创新处</TabsTrigger>
    </TabsList>
    <TabsContent value="one" className="flex-col">
      <Card>
        <CardHeader>
          <CardTitle>联合国KIP国际学院</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <ReactMarkdown>{KIP}</ReactMarkdown>
        </CardContent>
      </Card>
    </TabsContent>
    <TabsContent value="two">
      <Card>
        <CardHeader>
          <CardTitle>联合国地方经济发展局</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <ReactMarkdown>{LEDA}</ReactMarkdown>
        </CardContent>
      </Card>
    </TabsContent>
    <TabsContent value="three">
      <Card>
        <CardHeader>
          <CardTitle>联合国南南合作发展与创新处</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <ReactMarkdown>{IDEASS}</ReactMarkdown>
        </CardContent>
      </Card>
    </TabsContent>
  </Tabs>
)

export default function TabsDemo() {
  return (
    <div className={'flex flex-cols sm:flex-rows gap-2'}>
      <VerticalTabs/>
    </div>
  )
}

const KIP = `
### 简介

KIP国际学院成立于2011年，是教科文组织与粮农组织发起，联合国开发计划署、联合国妇女发展基金和联合国项目事务厅合作创建的，联合国下设的多种学术交流研究类学校之一，也是唯一一个《2030联合国千年发展目标》平台学院机构，并且是唯一一个受国际展览局（BIE）邀请参加2015米兰世博会并独立建馆的国际组织机构。KIP是知识、创新、政策与实践三个英文的首字母，学校重组并管理两大联合国机构用以实现2030联合国千年八项目标。他们分别是，联合国地方经济发展局（ILSLEDA）、联合国南南合作发展与创新处(IDEASS)。在不同国家政府框架内进行多边人类发展项目。自1989年以来，这促进了综合性和参与性的领土发展进程，并得到公共、私营和民间社会行为者的支持。多年来，它们在阿尔巴尼亚、安哥拉、伯利兹、玻利维亚、波斯尼亚和黑塞哥维那、哥伦比亚、哥斯达黎加、古巴、多米尼加共和国、萨尔瓦多、危地马拉、洪都拉斯、利比亚、马其顿、摩洛哥、莫桑比克、尼加拉瓜、塞尔维亚、南苏丹举行。非洲和突尼斯。

学院与国际超过120个著名高校和学术机构包括剑桥大学、哈佛大学、巴黎大学、麻省理工大学等进行合作，拥有属地实习、并拥有一个四种语言的国际电子学术期刊《大学论坛》，

### 目标

KIP 国际学院致力于推广与国际社会通过《联合国 2030 年议程》商定的目标和价值观相一致的知识、创新、政策和领土实践。其在感兴趣的国家和国际层面的主要活动是生产和传播知识、区域变革实验室联网、实施培训和高等教育举措以及实施创新战略项目。

KIP 国际学院通过国际研究和培训机构网络开展工作，并受益于来自科学、文化和合作领域的专家和人士的建议。它与感兴趣国家的经验、组织、专业中心和大学网络有着永久的联系，这些国家打算共同努力构建新知识并开发用于规划和管理发展进程的新工具。它还从事创新研究和发展行为者的能力建设。

KIP 国际学院旨在与国家和地方政府、国际组织和社会行为者合作，努力实现国际社会通过《联合国 2030 年议程》商定的目标和价值观，并认识到他们遇到的严重困难。一方面，该议程指出了一条通往公平、参与性和环境可持续发展的道路，但另一方面，世界各地的现实仍然是过度竞争，导致排斥、贫困、社会紧张、污染、不合理利用自然资源以及其他危险的不平衡。

KIP 国际学院提倡基于当地社区的积极作用、增强当地自然、人力和历史资源、整合不同部门的贡献以及所有社会行为者无一例外的参与的地域发展方法。它是一种植根于特定当地文化和现实的方法，但旨在建立一个广泛的交流网络，促进以满足人类需求与和平合作为中心的地方、国家和国际发展。地域方法不仅纠正了传统的针对特定部门方法典型的资源分散和分散的问题，而且还增强和协调了解决具体问题的经验的质量贡献。

### 发展沿革

KIP 国际学院由科学委员会指导，主席为埃德加·莫兰 (Edgar Morin)。该科学委员会于 2004 年 KIP 学院成立之前，由教科文组织与联合国开发计划署、联合国妇女发展基金和联合国项目事务厅合作创建，并于 2010 年与国际劳工组织、联合国环境规划署和世界卫生组织建立了联系。经过一段时间的磋商后，科学委员会建议创建 KIP 国际学校，此后经过以下大会讨论并建议后最终成立：联合国大会主席米格爾·德斯科托·布羅克曼（Miguel d'Escoto） 于 9 月 9 日，2009年；2009 年 10 月 14 日，法国国民议会在巴黎举行埃德加·莫兰 (Edgar Morin) 举行的会议；2010 年 5 月 4 日在布鲁塞尔与欧洲议会副主席和议员会面；2010 年 6 月 4 日开罗领土知识论坛；2010 年 12 月 4 日至 5 日在达喀尔举行的权力下放合作国际会议期间；2011年1月13日至14日在地拉那举行的权力下放合作和欧洲一体化国际会议期间；2011 年 3 月 17 日至 18 日在巴黎举行的经合组织发展援助委员会贫困小组全体会议上。
`;

const LEDA = `
于 1992 年在国际劳工组织、联合国开发计划署和联合国项目事务厅的合作下设立，提供与当地经济发展进程的治理、战略和实施相关的技术援助。特别是，它支持地方经济发展机构（LEDA）的创建、运作和联网。地方经济发展机构 LEDAs 是领土服务，由当地公共、私人和非营利组织协会管理，其使命是支持企业、增强当地资源和能力以及将弱势群体纳入经济活动。超过60 个 LEDA 在 18 个国家/地区运营，2011年并入联合国KIP国际学院。

ILS LEDA利用主要在联合国（开发计划署、劳工组织、项目厅、妇发基金等）和欧洲联盟在拉丁美洲和加勒比、欧洲、非洲和亚洲的人类发展方案框架内积累的经验和知识。

自1998年以来，该方案一直在合作实施60多个LEDA，以自我可持续的方式在18个国家运作。这些LEDA与ILS LEDA支持的全球网络相关联，该网络提供促销服务，技术援助，培训，协助起草国际项目，提高质量，特别是促进与LEDA和其他国家经济行为者的伙伴关系。

ILS LEDA在其活动中涉及多个合作伙伴，例如：大学，卓越中心和知名国际专家。

ILS LEDA参与KIP国际学校的活动，支持实施全面发展战略项目，组织知识系统化和传播讲习班，设计和开展培训课程和大学教育。所有这些活动都是应国家和地方政府及其他伙伴的要求与他们合作开展的，旨在促进经济发展进程，使一个领土的人民能够通过增加包容性和可持续的就业和收入来改善集体和个人福利。
`;

const IDEASS = `IDEASS 于 2001 年与国际劳工组织、联合国开发计划署和联合国项目事务厅合作设立，旨在识别和传播有助于高质量领土发展的创新。要了解 IDEASS 推动的创新及其当前活动，请访问网站 www.ideassonline.org 。该网站吸引了来自 190 多个国家的访客，是 KIP 国际学校永久文化活动的重要工具。2011年并入联合国KIP国际学院。
`
