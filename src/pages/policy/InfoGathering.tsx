import React from 'react';
import "./InfoGathering.css"
const InfoGathering = () => {
    return (
        <div className="container" data-layout="container">
            <div className="row flex-center min-vh-100 py-6">
                <div className="col-md-10">
                    <div className="card mb-3">
                        {/* <div className="bg-holder d-none d-lg-block bg-card" style="background-image:url(assets/img/illustrations/corner-4.png);"> */}
                        <div className="bg-holder d-none d-lg-block bg-card">
                        </div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-lg-8">
                                    <h3 className="mb-0">개인정보처리방침 : 20210204</h3>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card mb-3">
                        <div className="card-header">
                            <h5 className="mb-2">제 1조. 목적</h5>
                            <p className="mb-0">본 방침은 2021년 2월 4일부터 시행됩니다.</p>
                        </div>
                        <div className="card-body bg-light">
                            CloudMate(이하 ‘클라우드메이트’)는 MateCost(이하 ‘서비스’)를 제공함에 있어 보안과 ‘서비스’를 원활하게 제공하기 위해 다음과 같은 개인정보처리방침을 준수합니다. 이 문서는 ‘서비스’ 내 개인정보 항목, 수집방법, 공유, 보유, 파기, 보호, 운영 등 취급방법에 대한 사항을 공개 할 목적으로 작성 되었습니다.
                        </div>
                    </div>

                    <div className="card mb-3">
                        <div className="card-header">
                            <h5 className="mb-2">제 2조. 수집하는 개인정보의 항목 및 수집방법</h5>
                            <p className="mb-0">서비스는 청구서 발송, 청구서 결제, 이용량 증가 알림 등 각종 서비스의 제공 등을 위하여 아래와 같은 항목과 방법으로 개인정보를 수집하고 있습니다.</p>
                        </div>
                        <div className="card-body bg-light">
                            <ul className="pl-0 bullet-inside">
                                <li>회원의 이메일 주소, 아이디, 근무 회사명, 사업자 등록번호, 개인 연락처 을 회원 가입 시 수집합니다.</li>
                                <li>사용요금 결제 : 카드 정보 및 사업자등록번호는 사용요금 결제를 위해 결제 대행사에 제공하기 위해 사용됩니다.</li>
                                <li>서비스 이용에 따른 cookie 정보, 서비스접속, IP address 등이 수집될 수 있습니다.</li>
                                <li>서비스 이용 또는 사용함으로써 자동으로 수집될 수 있습니다.</li>
                                <li>서비스 가입이나 사용 중 회원의 자발적 제공을 통해 수집될 수 있습니다.</li>
                            </ul>
                        </div>
                    </div>

                    <div className="card mb-3">
                        <div className="card-header">
                            <h5 className="mb-2">제 2-1조. 회원 및 법정대리인의 권리와 행사 방법</h5>
                        </div>
                        <div className="card-body bg-light">
                            <ul className="pl-0 bullet-inside">
                                <li>회원은 언제든지 개인정보 수집, 이용 제공 등의 동의를 철회할 수 있으며 ‘클라우드메이트’가 보유하고 있는 회원님의 개인정보에 대한 열람, 제공이나 오류의 정정을 요구할 수 있습니다.</li>
                                <li>회원은 고객지원 요청을 통하여 개인정보 삭제 및 변경이 가능합니다.</li>
                            </ul>
                        </div>
                    </div>

                    <div className="card mb-3">
                        <div className="card-header">
                            <h5 className="mb-2">제2-2조. 개인정보 처리의 위탁</h5>
                        </div>
                        <div className="card-body bg-light">
                            <ul className="pl-0 bullet-inside">
                                <li>‘클라우드메이트’는 원활한 업무 처리를 위해서 아래와 같이 개인정보를 위탁하고 있으며, 관계 법령에 따른 위탁계약 시 개인정보가 안전하게 관리될 수 있도록 필요한 사항을 규정하고 있습니다. 단체의 개인정보 위탁처리 기관 및 위탁업무 내용은 아래와 같습니다.</li>
                                <li>제공받은 자 : 한국정보통신(주)</li>
                                <li>제공하는 목적 : 이용금액을 결제 용도</li>
                                <li>제공하는 개인정보 항목 : 신용카드 번호, 유효기간, 사업자등록번호</li>
                            </ul>
                        </div>
                    </div>

                    <div className="card mb-3">
                        <div className="card-header">
                            <h5 className="mb-2">제 3조. 개인정보의 수집목적 및 이용목적</h5>
                        </div>
                        <div className="card-body bg-light">
                            <ul className="pl-0 bullet-inside">
                                <li>회원 연락처, 근무 업체명은 회원에게 결제 정보를 제공하기 위한 목적으로 제공됩니다.</li>
                            </ul>
                        </div>
                    </div>

                    <div className="card mb-3">
                        <div className="card-header">
                            <h5 className="mb-2">제 4조. 개인정보의 공유 및 제공</h5>
                        </div>
                        <div className="card-body bg-light">
                            <ul className="pl-0 bullet-inside">
                                <li>서비스는 회원들의 개인정보를 '3. 개인정보의 수집목적 및 이용목적'에서 고지한 범위 내에서 사용하며 회원의 사전 동의 없이는 지정한 범위를 초과하여 이용하거나 원칙적으로 회원의 개인정보를 외부에 공개하지 않습니다.</li>
                            </ul>
                        </div>
                    </div>

                    <div className="card mb-3">
                        <div className="card-header">
                            <h5 className="mb-2">제 5조. 개인정보의 보유 및 이용기간</h5>
                            <p className="mb-0">원칙적으로 개인정보는 이용자의 근무 회사를 퇴사 하기 전까지 이용자의 개인정보를 보관하며, 이용자가 근무지를 퇴사하거나 하거나 개인정보 수집 및 이용목적이 달성된 후에는 해당 정보를 지체 없이 파기합니다.
                                하지만 아래의 정보는 단체의 정책에 따라 백업 사본이 아래 기간 까지 보관될 수도 있습니다</p>
                        </div>
                        <div className="card-body bg-light">
                            <ul className="pl-0 bullet-inside">
                                <li>보존 개인정보 : 보유근거: 부정 이용 방지 (단체내부 방침) | 보존기간: 회원탈퇴 후 1년</li>
                                <li>본인확인 관련기록 보존 개인정보 : 보유근거: 정보통신망 이용촉진 및 정보보호 등에 관한 법률 | 보존기간: 6개월</li>
                                <li>서비스 접속기록 : 보유근거: 통신비밀보호법 | 보존기간: 6개월</li>
                                <li>소비자의 불만 또는 분쟁처리에 관한 기록 : 보유근거: 전자상거래 등에서의 소비자 보호에 관한 법률 | 보존기간: 3년</li>
                            </ul>
                        </div>
                    </div>

                    <div className="card mb-3">
                        <div className="card-header">
                            <h5 className="mb-2">제 6조. 개인정보 파기 절차 및 방법</h5>
                            <p className="mb-0">원칙적으로 개인정보는 이용자의 근무지를 퇴사 하기 전까지 이용자의 개인정보를 보관하며, 이용자가 근무지를 퇴사하거나 하거나 개인정보 수집 및 이용목적이 달성된 후에는 해당 정보를 지체 없이 파기합니다.
                                하지만 아래의 정보는 단체의 정책에 따라 백업 사본이 아래 기간 까지 보관될 수도 있습니다</p>
                        </div>
                        <div className="card-body bg-light">
                            <ul className="pl-0 bullet-inside">
                                <li>회원이 회원가입 및 서비스 이용을 위해 입력한 정보는 목적이 달성된 후 별도의 DB로 옮겨져 내부 방침 및 기타 관련 법령의 정보 보호 사유에 따라(보유 및 이용기간 참조) 일정 기간 저장된 후 파기됩니다.</li>
                                <li>개인정보는 법률에 의한 경우가 아닌 한 보유되는 이외의 다른 목적으로 이용/제공되지 않습니다.</li>
                                <li>종이에 출력된 개인정보는 분쇄기로 분쇄하거나 소각을 통하여 파기합니다.</li>
                                <li>전자적 파일 형태로 저장된 개인정보는 기록을 재생할 수 없는 기술적 방법을 사용하여 삭제합니다.</li>
                                <li>회원이 근무지를 퇴사 하였을 경우 ‘서비스’에 개인정보가 남아있을 수 있습니다. 이 때 회원께서는 이전 직장의 담당자를 통하여 개인정보 삭제를 요청해 주셔야 합니다.</li>
                            </ul>
                        </div>
                    </div>

                    <div className="card mb-3">
                        <div className="card-header">
                            <h5 className="mb-2">제 7조. 개인정보 자동 수집 장치의 설치/운영 및 거부에 관한 사항</h5>
                        </div>
                        <div className="card-body bg-light">
                            <ul className="pl-0 bullet-inside">
                                <li>회원은 원칙적으로 개인정보 보호법에 의해 개인정보 수집 동의를 거부할 권리가 있으며, 수집동의 거부 시에는 서비스를 이용할 수 없습니다.</li>
                            </ul>
                        </div>
                    </div>

                    <div className="card mb-3">
                        <div className="card-header">
                            <h5 className="mb-2">제 8조. 개인정보의 기술적/관리적 보호 대책</h5>
                            <p className="mb-0">‘클라우드메이트’는 회원들의 개인정보를 취급함에 있어 개인정보가 분실, 도난, 누출, 변조 또는 훼손되지 않도록 안전성 확보를 위하여 다음과 같은 기술적/관리적 대책을 강구하고 최선의 노력을 다하고 있습니다.</p>
                        </div>
                        <div className="card-body bg-light">
                            <ul className="pl-0 bullet-inside">
                                <li>해킹이나 컴퓨터 바이러스 등에 의해 회원의 개인정보가 유출되거나 훼손되는 것을 막기 위해 최선을 다하고 있습니다.</li>
                                <li>개인정보의 훼손에 대비하여 방화벽 등을 이용하여 회원들의 개인정보나 자료가 누출되거나 손상되지 않도록 방지하고 있습니다. 기타 시스템적으로 보안성을 확보하기 위한 가능한 모든 기술적 장치를 갖추도록 노력하고 있습니다.</li>
                                <li>개인정보관련 취급 직원은 담당자에 한정시키고 있고 담당자에 대한 수시 교육을 통하여 개인정보취급방침의 준수를 항상 강조하고 있습니다.</li>
                            </ul>
                        </div>
                    </div>

                    <div className="card mb-3">
                        <div className="card-header">
                            <h5 className="mb-2">제 9조. 제 3자 사이트로의 이동</h5>
                            <p className="mb-0">‘서비스’는 이용자에게 제 3자의 웹사이트 또는 자료에 대한 링크를 제공할 수 있습니다. 이 경우 ‘클라우드메이트’는 제 3자의 외부 사이트 및 자료에 대한 아무런 통제권이 없으며, 해당 사이트의 개인정보보호정책 및 약관사항은 ‘클라우드메이트’와 무관함으로 방문한 사이트의 정책을 확인하여 불이익 및 물질적 손해가 일어나지 않도록 주의하여야 합니다.
                                이로 인해 발생한 책임은 전적으로 이용자에게 있습니다.</p>
                        </div>
                    </div>

                    <div className="card mb-3">
                        <div className="card-header">
                            <h5 className="mb-2">제 10조. 개인정보관리책임자 및 담당자의 연락처</h5>
                            <p className="mb-0">회원께서는 단체의 서비스를 이용하면서 발생하는 모든 개인정보보호 관련 민원을 개인정보관리책임자 혹은 담당부서로 신고하실 수 있습니다.
                                단체는 이용자들의 신고사항에 대해 신속히 충분한 답변을 드릴 것입니다.</p>
                        </div>
                        <div className="card-body bg-light">
                            <ul className="pl-0 bullet-inside">
                                <li>개인정보 관리 책임자</li>
                                <li>이름 : 김세준</li>
                                <li>직책 : 관리자</li>
                                <li>전화번호 : 02-2069-1980</li>
                                <li>메일 : @matecost</li>
                                <li>기타 개인정보침해에 관한 상담이 필요한 경우에는 한국정보보호진흥원, 대검찰청 인터넷범죄수사센터, 경찰청 사이버테러대응센터 등으로 문의하실 수 있습니다.</li>
                                <li>한국정보보호진흥원 (1336)</li>
                                <li>대검찰청 인터넷범죄수사센터 (02-3480-3600)</li>
                                <li>경찰청 사이버테러대응센터 (02-392-0330)</li>
                            </ul>
                        </div>
                    </div>


                </div>

                <div className="py-3">
                    (주)클라우드메이트 | 대표이사 : 윤주현 | 서울시 구로구 경인로 576 |
                    <a href="/policy/info_gathering/">개인정보처리방침</a><br />
                    연락처 : 82-2-2069-1980 | E-MAIL : contact@cloudmt.co.kr | 사업자번호 : 789-81-01310<br />
                    | © 2021~Present CLOUDMATE. All Rights Reserved.
                </div>

            </div>
        </div>
    );
};

export default InfoGathering;