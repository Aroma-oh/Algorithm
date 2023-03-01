# [level 0] 숫자 찾기 - 120904 

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/120904) 

### 성능 요약

메모리: 33.4 MB, 시간: 0.07 ms

### 구분

코딩테스트 연습 > 코딩테스트 입문

### 채점결과

<br/>정확성: 100.0<br/>합계: 100.0 / 100.0

### 문제 설명

<p>정수 <code>num</code>과 <code>k</code>가 매개변수로 주어질 때, <code>num</code>을 이루는 숫자 중에 <code>k</code>가 있으면 <code>num</code>의  그 숫자가 있는 자리 수를 return하고 없으면 -1을 return 하도록 solution 함수를 완성해보세요.</p>

<hr>

<h5>제한사항</h5>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">0 &lt; </font></font><code>num</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">&lt; 1,000,000</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">0 ≤ </font></font><code>k</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">&lt; 10</font></font></li>
<li><code>num</code>에 <code>k</code>가 여러 개 있으면 가장 처음 나타나는 자리를 return 합니다.</li>
</ul>

<hr>

<h5>입출력 예</h5>
<table class="table">
        <thead><tr>
<th><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">하나에</font></font></th>
<th><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">케이</font></font></th>
<th><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">결과</font></font></th>
</tr>
</thead>
        <tbody><tr>
<td>29183</td>
<td>1</td>
<td>3</td>
</tr>
<tr>
<td>232443</td>
<td>4</td>
<td><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">4</font></font></td>
</tr>
<tr>
<td>123456</td>
<td>7</td>
<td>-1</td>
</tr>
</tbody>
      </table>
<hr>

<h5>입출력 예 설명</h5>

<p>입출력 예 #1</p>

<ul>
<li>29183에서 1은 3번째에 있습니다.</li>
</ul>

<p>입출력 예 #2</p>

<ul>
<li>232443에서 4는 4번째에 처음 등장합니다.</li>
</ul>

<p>입출력 예 #3</p>

<ul>
<li>123456에 7은 없으므로 -1을 return 합니다.</li>
</ul>


> 출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges