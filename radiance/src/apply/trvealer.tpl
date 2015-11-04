<div id="applyFormTable1">
	<input type="hidden" id="price_0" value="480.000000000000000000000000000000" />
	<input type="hidden" id="prepay_0" value="0.00" />
	<div class="applyFormRow">
		<div class="col1">
			<span class="brown">*</span> <span class="dark" >姓名 </span>
		</div>
		<div class="col2">
			<input type="text" class="text001" id="lastName_0" name="data[0][LastName]" value=""/>
		</div>									
		<div class="clearfix"></div>
	</div>
	<div class="applyFormRow">
		<div class="note">
			为了确保预订, 姓名一定要和您的身份证上的相同
		</div>
	</div>
	<div class="applyFormRow">									
		<div class="col234">
		    <span class="brown">*</span> <span class="dark">身份证号 </span>
		</div>
		<div class="col2345">
			<input type="text" class="text002"  id="identity_0" name="data[0][CustomerIdentity]" value="" onBlur="id_change(0);"/>
		</div>
	</div>
	<div class="applyFormRow">
		<div class="note">
			身份证号用来购买个人旅行保险, 为必须信息。没有身份证可选择其它证件。
		</div>
	</div>
								
	<div class="applyFormRow">
		<div class="note">
		</div>
	</div>
								
	<div class="applyFormRow" id="sex_row_0" style="display:none">
		<div class="col1">
			<span class="brown">*</span> <span class="dark">性别</span>
		</div>
		<div class="col234">
			<select id="sex_0" name="data[0][sex]">
				<option value="0" select="selected"/>女</option>
				<option value="1" select="selected"/>男</option>
			</select>
			<span style="color:red;" id="sex_message_0"></span>
		</div>
	</div>
	<div class="applyFormRow">
		<div class="note">
			
		</div>
	</div>
	<!-- brith and sex end-->
	<div class="applyFormRow">
		<div class="col1">
			<span class="brown">*</span> <span class="dark">手机号码 </span>
		</div>
		<div class="col234">
			<input type="text" class="text002" id="mobile_0" name="data[0][Mobile]" value="" />
		</div>
	</div>
	<div class="applyFormRow">
		<div class="note">
			手机号码用来与您取得正常联系。
		</div>
	</div>
	<div class="applyFormRow">
		<div class="col1">
			<span class="brown">*</span><span class="dark">紧急联系人 </span>
		</div>
		<div class="col2">
			<input type="text" class="text001"  id="emergencyContact_0" name="data[0][EmergencyContact]" value=""/>
		</div>
		<div class="col3">
			<span class="brown">*</span><span class="dark">联系人手机 </span>
		</div>
		<div class="col4">
			<input type="text" class="text001"  id="emergencyContactMethod_0" name="data[0][EmergencyContactMethod]" value=""/>
		</div>
		<div class="clearfix"></div>
	</div>
	<div class="applyFormRow">
		<div class="note">
			建议填写: 情况紧急下无法与您取得联系时为确保旅行顺利的第一联系人。
		</div>
	</div>
	<div class="clearfix"></div>

	<div class="applyFormRow">
		<div class="col1">
			<span class="brown">*</span> <span class="dark">您的常用Email </span>
		</div>
		<div class="col234">
			<input type="text" class="text002" id="email_0" name="data[0][Email]" value="" onchange="email_netease(0)" />
		</div>
		<div class="col234" id="email_netease_0" style="margin-left:144px;color:#9b0000;"></div>
	</div>
	<div class="applyFormRow">
		<div class="note">
			Email用于接收出发前准备邮件等重要信息，请务必确认其真实有效
		</div>
	</div>
</div>